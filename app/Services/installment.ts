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
