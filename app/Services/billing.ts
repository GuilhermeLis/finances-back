import Billing from 'App/Models/Billing'
import { DateTime } from 'luxon'

export async function newBilling(
  name: string,
  amount: number,
  userId: number,
  monthToPay: DateTime
) {
  await Billing.create({ name, amount, userId, monthToPay })
}
