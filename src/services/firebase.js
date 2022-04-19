const fs = require('fs')
const admin = require('firebase-admin')
const config = require('../config.js')

const initializeFirebase = () => {
  const serviceAccount = JSON.parse(fs.readFileSync(config.firebase.credential, 'utf8'))
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: config.firebase.databaseURL
  })
  console.log(`Connected to ${config.firebase.databaseURL}`)
}

module.exports = {
  initializeFirebase
}