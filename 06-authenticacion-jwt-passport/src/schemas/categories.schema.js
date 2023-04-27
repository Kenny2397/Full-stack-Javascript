const Joi = require('joi')

const id = Joi.number().integer()
const title = Joi.string().min(3)
const description = Joi.string().min(3).max(250)
const image = Joi.string()

const createCategorySchema = Joi.object({
  title: title.required(),
  description: description.required(),
  image
})

const findCategorySchema = Joi.object({
  id: id.required()
})
const updateCategorySchema = Joi.object({
  id: id.required(),
  title: title.required(),
  description: description.required(),
  image
})

const deleteCategorySchema = Joi.object({
  id: id.required()
})

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  deleteCategorySchema,
  findCategorySchema
}
