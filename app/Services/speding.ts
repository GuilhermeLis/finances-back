import Spending from 'App/Models/Spending'
import { setInstallmentRecursively } from 'App/Services/installment'
import { DateTime } from 'luxon'

export async function newSpeding(
  name: string,
  userId: number,
  amount: number,
  installment: number,
  date: DateTime
) {
  const id = await (await Spending.create({ name, userId })).id
  await setInstallmentRecursively(id, amount, date, installment)
}
