const args = require('./services/args')
const { server } = require('./server.js')
const { connectIO } = require('./services/io.js')
const { initializeMongo } = require('./services/mongo.js')
const { initializeRedis } = require('./services/redis')

const main = async () => {
  if (process.env.DB === 'mongo' || process.env.SESSION_DRIVER === 'mongo') {
    await initializeMongo()
  }

  if (process.env.SESSION_DRIVER === 'redis') {
    await initializeRedis()
  }

  connectIO(server)

  server.listen(args.port, () => {
    console.log(`Listening to port ${ args.port }`)
  })
}

main()