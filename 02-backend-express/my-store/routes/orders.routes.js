const express = require('express')
const router = express.Router()

const { getOrderSchema, createOrderSchema } = require('./../schemas/orders.schema')

const { validatorHandler } = require('./../middlewares/validator.handler')

const OrderService = require('./../services/order.services')
const orderService = new OrderService()

// CREATE ORDER
router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
  try {
    const response = await orderService.create(req.body)
    res.status(200).json({
      size: response.length,
      response
    })
  } catch (error) {
    next(error)
  }
})

// GET ORDERS
router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
  try {
    const response = await orderService.findOne(req.params.id)
    res.status(200).json({
      response
    })
  } catch (error) {
    next(error)
  }
})

// ALL ORDERS
router.get('/', async (req, res, next) => {
  try {
    const orders = await orderService.find()
    res.status(200).json({
      size: orders.length || 0,
      data: orders
    })
  }
  catch(err) {
    next(err)
  }
})

module.exports = router
