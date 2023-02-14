const http = require('http')

const router = (req, res, next) => {
  console.log('Nueva peticion!')
  console.log(req.url)
  switch(req.url){
    case '/': {
      res.writeHead(201, { 'Content-type': 'text/plain' })
      res.write('Hello World!')
      res.end()
      break
    }
    case '/hola': {
      res.writeHead(201, { 'Content-type': 'text/plain' })
      const saludo = Saludar()
      res.write(saludo)
      res.end()
      break
    }
    default: {
      console.error('404 Not Found')
      res.writeHead(404, 'Not Found')
      res.end('404 Not Found')
    }
  }
}

function Saludar (){
  return 'Hola mundo saludo'
}
const server = http.createServer(router)
const PORT = 3000
server.listen(PORT, (err) => {
  if(err) {
    console.info('Could not establish a connection to the server')
    console.error(err.message)
  }
  console.info(`> 🚀 Server listening on \http://localhost:${PORT}`)

})
