const Joi = require('joi')

const id = Joi.string().uuid()
const title = Joi.string().min(3)
const description = Joi.string()
const price = Joi.number().min(10)
const image = Joi.string().uri()
const categoryId = Joi.number().integer()

const createProductSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  price: price.required(),
  image: image.required(),
  categoryId: categoryId.required()
})

const updateProductSchema = Joi.object({
  id: id.required(),
  title: title,
  description: description,
  price: price,
  image: image
})

const findOneProductSchema = Joi.object({
  id: id.required(),
})

const deleteProductSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  createProductSchema,
  updateProductSchema,
  findOneProductSchema,
  deleteProductSchema
}

