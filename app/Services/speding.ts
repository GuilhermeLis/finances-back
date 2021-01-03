import Spending from 'App/Models/Spending'

export async function newSpeding(name: string, amount: number) {
  await Spending.create({ name, amount })
}
