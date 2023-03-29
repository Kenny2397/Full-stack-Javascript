const Joi = require('joi')

const id = Joi.string().uuid()
const title = Joi.string().min(3)
const description = Joi.string()
const price = Joi.number().min(10)
const image = Joi.string().uri()
const categoryId = Joi.number().integer()

const limit = Joi.number().integer()
const offset = Joi.number().integer()

const createProductSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
  categoryId: categoryId.required()
})

const updateProductSchema = Joi.object({
  id: id.required(),
  title,
  description,
  price,
  image,
  categoryId
})

const findOneProductSchema = Joi.object({
  id: id.required()
})

const deleteProductSchema = Joi.object({
  id: id.required()
})

const limitOffsetSchema = Joi.object({
  limit,
  offset
})

module.exports = {
  createProductSchema,
  updateProductSchema,
  findOneProductSchema,
  deleteProductSchema,
  limitOffsetSchema
}
