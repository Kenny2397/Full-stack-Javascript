const express = require('express')
const router = express.Router()

// services

const UserService = require('../services/user.services')
const userService = new UserService()

// Schemas

const {
  createUserSchema,
  updateUserSchema,
  getUserSchema
} = require('./../schemas/user.schema')

// middlewares

// handler validate query params and body param
const { validatorHandler } = require('./../middlewares/validator.handler')

/**
 * ROUTES
 */

// Get all Users
router.get('/', async (req, res, next) => {
  try {
    const response = await userService.find()
    res.status(200).json({
      data: response
    })
  } catch (error) {
    next(error)
  }
})

/** GET USER */
router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const response = await userService.findOne(id)
      res.status(200).json({
        data: response
      })
    } catch (error) {
      next(error)
    }
  })

/** Create User */
router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const newUser = await userService.create(body)
      res.status(200).json({
        response: newUser
      })
    }
    catch (error) {
      next(error)
    }
  })

/** UPDATE USER */
router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const userUpdated = await userService.update(id, body)
      res.status(200).json(userUpdated)
    } catch (error) {
      next(error)
    }
  }
)

/** DELETE USER */
router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await userService.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router
