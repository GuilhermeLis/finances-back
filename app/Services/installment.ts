import Database from '@ioc:Adonis/Lucid/Database'
import moment from 'moment'
import Installment from 'App/Models/Installment'
import { DateTime } from 'luxon'

export async function setInstallment(speding: number, amount: number, monthStart: DateTime) {
  await Installment.create({ spendingId: speding, amount, monthToPay: monthStart })
}

export async function setInstallmentRecursively(
  speding: number,
  amount: number,
  monthStart: DateTime,
  installment: number
) {
  const monthToPay = [monthStart]
  let numberOfMonths = 0
  let lastMonth = monthStart.toISODate()
  while (numberOfMonths < installment - 1) {
    const newMonthToPay = moment(lastMonth, 'YYYY-M-D').add(1, 'M')
    monthToPay.push(DateTime.fromISO(newMonthToPay.format('YYYY-MM-DD')))
    lastMonth = newMonthToPay.format('YYYY-MM-DD')
    numberOfMonths++
  }

  monthToPay.forEach(async (month) => {
    await Installment.create({
      spendingId: speding,
      amount: amount,
      monthToPay: month,
    })
  })
}

export async function balanceOfTheMonth(month: string) {
  const { rows } = await Database.rawQuery(
    `
  select Sum(i.amount) as valorTotal
  from installments as i where i.month_to_pay = ?
  `,
    [month]
  )
  const { valortotal: valorTotal } = rows[0]
  return { valorTotal }
}

export async function balanceForMonth() {
  const { rows } = await Database.rawQuery(`
    select Sum(i.amount) as valorTotal,
    TO_CHAR(i.month_to_pay, 'YYYY-MM-DD') as date,
    extract(month from i.month_to_pay) as month
    from installments as i group by i.month_to_pay
  `)

  return rows
}
