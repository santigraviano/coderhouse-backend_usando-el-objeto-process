const yargs = require('yargs')(process.argv.slice(2))

const args = yargs.default({
  port: 8080
}).argv

module.exports = args