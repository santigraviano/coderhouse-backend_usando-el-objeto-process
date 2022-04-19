const DB = require('../../containers/sql.js')

module.exports = class ProductSQL extends DB {
  constructor() {
    super('products')
  }
}