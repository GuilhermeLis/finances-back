import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { newSpeding } from 'App/Services/speding'

export default class SpendingsController {
  public async store({ request }: HttpContextContract) {
    const { name, amount } = request.all()
    await newSpeding(name, amount)
  }
}
