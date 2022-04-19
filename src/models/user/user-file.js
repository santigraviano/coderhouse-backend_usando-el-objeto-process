const DB = require('../../containers/file.js')

module.exports = class UserFile extends DB {
  constructor() {
    super('users')
  }
}