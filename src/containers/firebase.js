const { getFirestore } = require('firebase-admin/firestore')
const { initializeFirebase } = require('../services/firebase.js')

initializeFirebase()

class FirebaseContainer {
  constructor(collection) {
    this.db = getFirestore().collection(collection)
  }

  async getAll() {
    const query = await this.db.get()
    let docs = query.docs

    const items = docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    return items
  }

  async getById(id) {
    const item = await this.db.doc(id).get()
    if (!item.exists) throw new Error('Item not found')
    return { id: item.id, ...item.data() }
  }

  async save(data) {
    const { id } = await this.db.add({
      ...data,
      timestamp: Date.now()
    })
    return id
  }

  async update(id, data) {
    const item = await this.db.doc(id).get()
    if (!item.exists) throw new Error('Item not found')
    await this.db.doc(id).update(data)
  }

  async delete(id) {
    const item = await this.db.doc(id).get()
    if (!item.exists) throw new Error('Item not found')
    await this.db.doc(id).delete()
  }

  async deleteAll() {
    
  }
}

module.exports = FirebaseContainer