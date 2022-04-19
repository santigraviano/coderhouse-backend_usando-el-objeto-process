const DB = require('../../containers/firebase.js')

module.exports = class UserFirebase extends DB {
  constructor() {
    super('users')
  }

  async getByEmail(email) {
    const snapshot = await this.db.where('email', '==', email).get()

    if (snapshot.empty) {
      return null
    }
    
    return {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data()
    }
  }
}