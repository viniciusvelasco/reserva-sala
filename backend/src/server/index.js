
const restify = require('restify')
const server = restify.createServer()
const routes = require('../http/routes')
const cors = require('./cors')

routes(server)

server.pre(cors.preflight)
server.use(cors.actual)

module.exports = server
