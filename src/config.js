module.exports = {
  file: {
    path: './_db/file'
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  },
  sqlite: {
    filename: './_db/sqlite/ecommerce.sqlite',
  },
  mongo: {
    protocol: process.env.MONGO_PROTOCOL,
    host: process.env.MONGO_HOST,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    database: process.env.MONGO_DATABASE,
    params: process.env.MONGO_PARAMS
  },
  firebase: {
    credential: process.env.FIREBASE_CREDENTIAL_FILE,
    databaseURL: process.env.FIREBASE_DATABASE_URL
  },
  session: {
    maxAge: 600000
  }
}