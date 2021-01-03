import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { newSpeding } from 'App/Services/speding'
import { DateTime } from 'luxon'

export default class SpendingsController {
  public async store({ request, auth }: HttpContextContract) {
    const { name, amount, date, installment } = request.all()
    const { id } = auth.user
    await newSpeding(name, id, amount, installment, DateTime.fromISO(date))
  }
}
