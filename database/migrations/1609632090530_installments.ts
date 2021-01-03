import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Installments extends BaseSchema {
  protected tableName = 'installments'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('spending_id')
        .references('id')
        .inTable('spendings')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable()
      table.double('amount').notNullable()
      table.boolean('paid').defaultTo(false)
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
