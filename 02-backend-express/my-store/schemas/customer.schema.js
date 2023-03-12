const Joi = require('joi')

const { createUserSchema } = require('./user.schema')

const id = Joi.number().integer()
const name = Joi.string().min(3)
const lastName = Joi.string().min(3)
const phone = Joi.number().integer().min(4)
const userId = Joi.number().integer()



const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: createUserSchema.required()
})

const createByIdUserCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required()
})

const updateCustomerSchema = Joi.object({
  name: name.optional(),
  lastName: lastName.optional(),
  phone: phone,
  userId: userId
})

const getCustomerSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createCustomerSchema,
  createByIdUserCustomerSchema,
  updateCustomerSchema,
  getCustomerSchema
}
