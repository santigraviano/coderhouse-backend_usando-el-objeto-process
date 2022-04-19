const DB = require('../../containers/file.js')

module.exports = class ProductFile extends DB {
  constructor() {
    super('products')
  }
}