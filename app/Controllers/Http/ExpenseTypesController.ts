import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { newExpenseType } from 'App/Services/expenseType'

export default class ExpenseTypesController {
  public async store({ request }: HttpContextContract) {
    const { name, description } = request.all()
    await newExpenseType(name, description)
  }
}
