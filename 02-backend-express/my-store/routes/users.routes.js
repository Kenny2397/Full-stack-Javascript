const express = require('express')
const router = express.Router()


// services
const UserService = require('../services/user.services')
const userService = new UserService()


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

module.exports = router
