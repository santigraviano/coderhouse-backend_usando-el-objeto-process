const DB = require('../../containers/memory.js')

module.exports = class CartMemory extends DB {
  constructor() {
    super()
  }
}