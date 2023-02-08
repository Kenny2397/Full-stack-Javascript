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
      res.write('Hola ya se utilizar http de node.js')
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
http.createServer(router).listen(3000)

console.log('escuchando en el puerto 3000')