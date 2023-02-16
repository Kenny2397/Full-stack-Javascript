const express = require('express')
const router = express.Router()
const moment = require('moment')

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
  res.status(200).json({
    data: [
      {
        name: "example",
        price: 100
      }
    ]
  })
  next()
})

// find product
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  res.status(200).json({
    data: {
      id: id,
      name: "example",
      price: 100
    }
  })
  next()
})

// create product
router.post('/:id', (req, res, next) => {
  const { id } = req.params
  res.json({
    data: {
      productId: id,
      name: "example",
      price: 100
    }
  })
  next()
})


module.exports = router
