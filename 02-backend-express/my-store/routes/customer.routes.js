const express = require('express')
const router = express.Router()

// services

const CustomerService = require('../services/customer.services')
const customerService = new CustomerService()

// Schemas

const {
  createCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema
} = require('./../schemas/customer.schema')

// middlewares

// handler validate query params and body param
const { validatorHandler } = require('./../middlewares/validator.handler')

/**
 * ROUTES
 */

// GET ALL CustomerS
router.get('/', async (req, res, next) => {
  try {
    const response = await customerService.find()
    res.status(200).json({
      data: response
    })
  } catch (error) {
    next(error)
  }
})

/** GET Customer */
router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      console.log(id)
      const response = await customerService.findOne(id)
      res.status(200).json({
        data: response
      })
    } catch (error) {
      next(error)
    }
  })

/** CREATE Customer */
router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newCustomer = await customerService.create(body)
      res.status(200).json({
        response: newCustomer
      })
    }
    catch (error) {
      next(error)
    }
  })

/** UPDATE Customer */
router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      console.log(id, body)
      const CustomerUpdated = await customerService.update(id, body)
      res.status(200).json(CustomerUpdated)
    } catch (error) {
      next(error)
    }
  }
)

/** DELETE Customer */
router.delete('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await customerService.delete(id);
      // console.log(id)
      res.status(200).json({
        "message": "Customer removed",
        id
      });
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router
