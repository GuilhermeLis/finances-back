import ExpenseType from 'App/Models/ExpenseType'

export async function newExpenseType(name: string, description: string) {
  await ExpenseType.create({ name, description })
}
