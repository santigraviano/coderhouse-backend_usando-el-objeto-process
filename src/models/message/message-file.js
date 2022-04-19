const DB = require('../../containers/file.js')

module.exports = class MessageFile extends DB {
  constructor() {
    super('messages')
  }
}