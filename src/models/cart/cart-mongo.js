const DB = require('../../containers/mongodb.js')

module.exports = class CartMongo extends DB {
  constructor() {
    super('carts', {
      products: [
        {
          name: String,
          description: String,
          code: String,
          image: String,
          price: Number,
          stock: Number,
          timestamp: Number
        }
      ],
      timestamp: { type: Number, default: Date.now() }
    })
  }
}