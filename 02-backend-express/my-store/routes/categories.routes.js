const express = require('express')
const router = express.Router()

const { createCategorySchema,
  updateCategorySchema,
  deleteCategorySchema,
  findCategorySchema
} = require('./../schemas/categories.schema')

const CategoryService = require('./../services/category.services')
const categoryService = new CategoryService()

const { validatorHandler } = require('../middlewares/validator.handler')
/**
 * Routes
 */

// GET ALL
router.get('/', async (req, res, next) => {
  try {
    const response = await categoryService.find()
    res.status(200).json({
      size: response.length,
      response
    })
  } catch (error) {
    next(error)
  }
})
// GET CATEGORY
router.get('/:id',
  validatorHandler(findCategorySchema, 'params'),
  async (req, res, next) => {
  try {
    const response = await categoryService.findOne(req.params.id)
    res.status(200).json({
      response
    })
  } catch (error) {
    next(error)
  }
})
// CREATE CATEGORY
router.post('/', validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
  try {
    const response = await categoryService.create(req.body)
    res.status(200).json({
      response
    })
  } catch (error) {
    next(error)
  }
})
// UPDATE  CATEGORY
router.patch('/:id', validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
  try {
    const response = await categoryService.update()
    res.status(200).json({
      response
    })
  } catch (error) {
    next(error)
  }
})
// DELETE  CATEGORY
router.patch('/', validatorHandler(deleteCategorySchema, 'params'),
  async (req, res, next) => {
  try {
    const response = await categoryService.delete()
    res.status(200).json({
      response
    })
  } catch (error) {
    next(error)
  }
})


module.exports = router
