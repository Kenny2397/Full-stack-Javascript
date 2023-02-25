const express = require('express')

const productsRouter = require('./products.routes')
const usersRouter = require('./users.routes')

function RouterApi(app){
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  // router.use('/categories', categoriesRouter)
  router.use('/users', usersRouter)
}

module.exports = RouterApi

