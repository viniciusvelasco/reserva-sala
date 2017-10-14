
const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Rodando o servidor')
    next()
  })
}

module.exports = routes
