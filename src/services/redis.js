const { createClient } = require('redis')
const connect = require('connect-redis')
const session = require('express-session')

const client = createClient({
  url: `redis://default@redis`,
  legacyMode: true
})

const initializeRedis = async () => {
  try {
    await client.connect()
    console.log('Redis client connected')
  }
  catch (err) {
    console.error(err)
  }
}

const RedisStore = connect(session)

const redisStore = new RedisStore({
  client
})

module.exports = {
  initializeRedis,
  redisStore
}