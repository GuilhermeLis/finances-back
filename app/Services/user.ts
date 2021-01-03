import User from 'App/Models/User'

export async function newUser(email: string, password: string, cpf: number, name: string) {
  await User.create({ email, password, cpf, name })
}
