import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { balanceOfTheMonth, balanceForMonth } from 'App/Services/installment'

export default class InstallmentsController {
  public async balanceOfTheMonth({ request }: HttpContextContract) {
    const { month } = request.all()
    return await balanceOfTheMonth(month)
  }

  public async balace() {
    return balanceForMonth()
  }
}
