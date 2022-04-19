const DB = require('../../containers/mongodb.js')

module.exports = class UserMongo extends DB {
  constructor() {
    super('users', {
      email: String,
      password: String,
      firstname: String,
      lastname: String,
      timestamp: { type: Number, default: Date.now() }
    })
  }

  async getByEmail(email) {
    const user = await this.model.findOne({ email })
    return user
  }
}