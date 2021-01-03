import User from 'App/Models/User'

export async function newUser(email: string, password: string, cpf: number, name: string) {
  await User.create({ email, password, cpf, name })
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const teste = await User.findBy('email', email)
  return await User.findBy('email', email)
}
