const Joi = require('joi')

const id = Joi.number().integer()
const title = Joi.string().min(3)
const description = Joi.string().min(3).max(250)
const image = Joi.string()

const createCategory = Joi.object({
  id: id.required(),
  title: title.required(),
  description: description.required(),
  image: image
})

const updateCategory = Joi.object({
  id: id.required(),
  title: title.required(),
  description: description.required(),
  image: image
})

const deleteCategory = Joi.object({
  id: id.required(),
})

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory
}



