const express = require('express')
const router = express.Router()

/**
 * Routes
 */

// GET ALL
router.get('/', async (req, res, next) => {
  try {
    const response = await service
  } catch (error) {
    next(error)
  }
})
// GET CATEGORY
router.get('/', async (req, res, next) => {
  try {
    const response = await service
  } catch (error) {
    next(error)
  }
})
// CREATE CATEGORY
router.post('/', async (req, res, next) => {
  try {
    const response = await service
  } catch (error) {
    next(error)
  }
})
// UPDATE  CATEGORY
router.patch('/', async (req, res, next) => {
  try {
    const response = await service
  } catch (error) {
    next(error)
  }
})
// DELETE  CATEGORY
router.patch('/', async (req, res, next) => {
  try {
    const response = await service
  } catch (error) {
    next(error)
  }
})


module.exports = router
