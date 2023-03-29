const faker = require('faker')
const boom = require('@hapi/boom')

// const pool = require('./../libs/postgres.pool')

const { models } = require('./../libs/sequelize')
const { Op } = require('sequelize')
class ProductService {
  generate () {
    const limit = 100
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  async create (data) {
    const newProduct = await models.Product.create(data)
    return newProduct
  }

  // GET ALL PRODUCTS
  async find (query) {
    const options = {
      include: ['category'],
      where: {
      }
    }
    const { limit, offset } = query
    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }

    const { price } = query
    if (price) {
      options.where.price = price
    }

    const { priceMin, priceMax } = query

    if (priceMin && priceMax) {
      options.where.price = {
        [Op.between]: [priceMin, priceMax]
      }
    }
    console.log(options)
    const products = await models.Product.findAll(options)
    return products
  }

  // GET PRODUCT
  async findOne (productId) {
    const product = this.products.find(p => p.id === productId)
    console.log(product)
    if (!product) {
      throw boom.notFound('No se encontró el producto')
    }
    if (product.isBlock) {
      throw boom.conflict('El producto está bloqueado')
    }
    return product
  }

  async update (productId, data) {
    const productIndex = this.products.findIndex(p => p.id === productId)
    // console.log(productIndex)
    if (productIndex === -1) {
      throw boom.notFound('No se encontró el producto')
    }
    const product = this.products[productIndex]
    const updatedProduct = {
      ...product,
      ...data
    }
    this.products[productIndex] = updatedProduct
    return updatedProduct
  }

  async delete (productId) {
    const productIndex = this.products.findIndex(p => p.id === productId)
    if (productIndex === -1) {
      throw boom.notFound('No se encontró producto')
    }
    this.product.splice(productIndex, 1)
    return { productIndex }
  }
}

module.exports = ProductService
