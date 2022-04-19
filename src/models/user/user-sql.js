const DB = require('../../containers/sql.js')

module.exports = class UserSQL extends DB {
  constructor() {
    super('users')
  }
}