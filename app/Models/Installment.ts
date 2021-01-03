import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Installment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'spending_id' })
  public spendingId: number

  @column.date({ columnName: 'month_to_pay' })
  public monthToPay: DateTime

  @column()
  public amount: number

  @column()
  public paid: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
