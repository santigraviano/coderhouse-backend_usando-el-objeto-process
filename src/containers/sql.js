const knex = require('knex')
const config = require('../config.js')

class SQLContainer {
  constructor(table) {
    this.db = knex({
      client: process.env.SQL_DRIVER,
      connection: config[process.env.SQL_DRIVER],
      useNullAsDefault: true
    })

    this.table = table
  }

  async getAll() {
    const items = await this.db.select().from(this.table)
    return items
  }

  async getById(id) {
    const item = await this.db(this.table).where({ id }).first()
    if (!item) throw new Error('Item not found')
    return item
  }

  async save(data) {
    const result = await this.db(this.table).insert(data)
    return result[0]
  }

  async update(id, data) {
    const item = await this.db(this.table).where({ id }).update(data)
    if (!item) throw new Error('Item not found')
  }

  async delete(id) {
    const item = await this.db(this.table).where({ id }).del()
    if (!item) throw new Error('Item not found')
  }

  async deleteAll() {
    await this.db(this.table).where({}).del()
  }
}

module.exports = SQLContainer