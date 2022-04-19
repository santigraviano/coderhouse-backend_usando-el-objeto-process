const DB = require('../../containers/file.js')

module.exports = class CartFile extends DB {
  constructor() {
    super('carts')
  }
}