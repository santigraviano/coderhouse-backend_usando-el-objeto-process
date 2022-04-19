const DB = require('../../containers/firebase.js')

module.exports = class MessageFirebase extends DB {
  constructor() {
    super('messages')
  }
}