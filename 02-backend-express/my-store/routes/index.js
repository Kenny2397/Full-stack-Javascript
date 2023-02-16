const productsRouter = require('./products.routes')

function RouterApi(app){
  app.use('/products', productsRouter)
}

module.exports = RouterApi

