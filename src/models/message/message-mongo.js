const DB = require('../../containers/mongodb.js')

module.exports = class MessageMongo extends DB {
  constructor() {
    super('messages', {
      author: String,
      text: String,
      timestamp: { type: Number, default: Date.now() }
    })
  }
}