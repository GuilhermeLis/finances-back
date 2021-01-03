import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { newUser } from 'App/Services/user'

export default class UsersController {
  public async store({ request }: HttpContextContract) {
    const { email, password, cpf, name } = request.all()
    await newUser(email, password, cpf, name)
  }
}
