const DB = require('../../containers/firebase.js')

module.exports = class ProductFirebase extends DB {
  constructor() {
    super('products')
  }
}