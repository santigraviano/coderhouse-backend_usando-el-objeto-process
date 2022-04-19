const DB = require('../../containers/firebase.js')

module.exports = class CartFirebase extends DB {
  constructor() {
    super('carts')
  }
}