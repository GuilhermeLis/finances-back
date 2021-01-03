import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getUserByEmail } from 'App/Services/user'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthorizationsController {
  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.all()

    const user = await getUserByEmail(email)

    const userPassword = user?.$getAttribute('password')

    if (await Hash.verify(userPassword, password)) {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '1 day',
      })

      return token
    } else {
      return response.status(400)
    }
  }
}
