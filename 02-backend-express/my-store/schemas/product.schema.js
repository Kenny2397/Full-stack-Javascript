const joi = require('joi')

const id = joi.string().uuid()
const name = joi.string().min(3).max(15)
const price = joi.number().min(10).max(15000)
const image = joi.string().uri()


const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
})

const updateProductSchema = joi.object({
  id: id.required(),
  name: name,
  price: price,
  image: image
})

const findOneProductSchema = joi.object({
  id: id.required(),
})

module.exports = {
  createProductSchema,
  updateProductSchema,
  findOneProductSchema

}

