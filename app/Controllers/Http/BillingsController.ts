import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { newBilling } from 'App/Services/billing'

export default class BillingsController {
  public async store({ request, auth }: HttpContextContract) {
    const { name, amount, date } = request.all()
    const { id } = auth.user
    await newBilling(name, amount, id, date)
  }
}
