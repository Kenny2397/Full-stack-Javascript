const express = require('express')

const productsRouter = require('./products.routes')
const usersRouter = require('./users.routes')
const customersRouter = require('./customers.routes')
const categoriesRouter = require('./categories.routes')

function RouterApi(app){
  const router = express.Router()
  app.use('/api/v1', router)

    router.use('/products', productsRouter)
    router.use('/users', usersRouter)
    router.use('/customers', customersRouter)
    router.use('/categories', categoriesRouter)
}

module.exports = RouterApi

