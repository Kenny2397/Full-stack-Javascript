const express = require('express')
const router = express.Router()
const moment = require('moment')

// Services
const ProductService = require('./../services/product.services')
const productService = new ProductService()

// schemas
const {
  createProductSchema,
  updateProductSchema,
  findOneProductSchema
} = require('./../schemas/product.schemas')

// validator handler
const { validatorHandler } = require('./../middlewares/validator.handler')



// middleware that is specific to this router
router.use((req, res, next) => {
  let now = moment()
  console.log('Time: ', now.format('DD-MM-YYYY hh:mm:ss'))
  next()
})



router.get('/filter', async (req, res, next) => {
  const { size } = req.query

  res.status(200).json({
    data: {
      size: size
    }
  })
  next()
})


// all of products
router.get('/', async (req, res, next) => {
  try {
    const products = await productService.find()
    res.status(200).json({
      size: products.length || 0,
      data: products
    })
  }
  catch(err) {
    next(err)
  }
})

// find product
router.get('/:id',
  validatorHandler(findOneProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const product = await productService.findOne(id)
      res.status(200).json({
        data: product
      })
    }
    catch (err) {
      next(err)
    }
  })

// create product
router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      console.log(body)
      const newProduct = await productService.create(body)
      res.status(201).json({
        data: newProduct
      })
    }
    catch (err) {
      next(err)
    }
  })

// update ´product
router.patch('/:id',
  validatorHandler(findOneProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      // console.log(id)
      const updatedProduct = await productService.update(id, req.body, next)
      res.json({
        data: updatedProduct
      })
    }
    catch (err) {
      next(err)
    }
  })

// delete product
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const index = await productService.delete(id, next)
    res.json({
      id: index
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

module.exports = router
