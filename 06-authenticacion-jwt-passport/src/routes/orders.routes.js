const express = require('express')
const router = express.Router()

const {
  getOrderSchema,
  createOrderSchema,
  addItemSchema
} = require('./../schemas/orders.schema')

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

// GET ORDER
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
    const orders = await orderService.find(req.query)
    res.status(200).json({
      size: orders.length || 0,
      data: orders
    })
  } catch (err) {
    next(err)
  }
})

// ADD ITEM

router.post('/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newItem = await orderService.addItem(body)
      res.status(201).json(newItem)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
