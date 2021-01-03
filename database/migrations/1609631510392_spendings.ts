import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Spendings extends BaseSchema {
  protected tableName = 'spendings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.double('amount').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
