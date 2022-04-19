const { Server } = require('socket.io')

let io
const connectIO = (server) => {
  io = new Server(server)

  io.on('connection', socket => {

  })
}

const broadcast = (event, data) => {
  io.emit(event, data)
}

module.exports = {
  connectIO,
  broadcast
}