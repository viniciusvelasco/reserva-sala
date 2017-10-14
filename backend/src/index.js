
const server = require('./server')

server.get('/', (req, res, next) => {
  res.send('Rodando o servidor')
  next()
})

server.listen('1234')
