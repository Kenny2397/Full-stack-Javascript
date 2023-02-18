const express = require('express')

const productsRouter = require('./products.routes')

function RouterApi(app){
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/categories', productsRouter)
  router.use('/users', productsRouter)
}

module.exports = RouterApi

