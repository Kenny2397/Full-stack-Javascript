const express = require('express')
const router = express.Router()
const moment = require('moment')

const  ProductService = require('./../services/product.services')
const productService = new ProductService()


// middleware that is specific to this router
router.use((req, res, next) => {
  let now = moment()
  console.log('Time: ', now.format('DD-MM-YYYY hh:mm:ss'))
  next()
})



router.get('/filter', (req, res, next) => {
  const { size } = req.query
  res.status(200).json({
    data: {
      size: size
    }
  })
  next()
})


// all of products
router.get('/', (req, res, next) => {
  const products = productService.find()
  res.status(200).json({
    size: products.length,
    data: products
  })
  next()
})

// find product
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  const product = productService.findOne(id)
  res.status(200).json({
    data: product
  })
  next()
})

// create product
router.post('/', (req, res, next) => {
  const body = req.body
  console.log(body)
  const newProduct = productService.create(body)
  res.status(201).json({
    data: newProduct
  })
  next()
})

// update ´product
router.patch('/:id', (req, res, next) => {
  const { id } = req.params
  const updatedProduct = productService.update(id, req.body, next)
  res.json({
    data: updatedProduct
  })
})

// delete product
router.delete('/:id',  (req, res, next) => {
  const { id } = req.params
  const index = productService.delete(id, next)
  res.json({
    id: index
  })
})

module.exports = router
