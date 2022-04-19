const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const config = require('../config.js')

const { protocol, user, pass, host, database, params } = config.mongo
const mongoUrl = `${protocol}://${user}:${pass}@${host}/${database}?${params}`

const initializeMongo = async () => {
  try {
    await mongoose.connect(mongoUrl)
    console.log(`Connected to ${mongoUrl}`)
  }
  catch(e) {
    console.error(e.message, e.stack)
  }
}

const mongoStore = new MongoStore({
  mongoUrl
})

module.exports = {
  initializeMongo,
  mongoStore
}