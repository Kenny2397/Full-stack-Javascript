const faker = require('faker')
const boom = require('@hapi/boom')

// const pool = require('./../libs/postgres.pool')

const { models } = require('./../libs/sequelize')
class ProductService {

  constructor() {
    // this.products = []
    // this.generate()
    // this.pool = pool
    // this.pool.on('error', (err) => {
    //   console.error(err)
    // })
  }

  generate() {
    const limit = 100;
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

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const options = {
      include: ['category'],
    }
    const { limit, offset } = query
    if ( limit && offset ) {
      options.limit = limit
      options.offset = offset
    }
    console.log(options)
    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(productId) {
    const product = this.products.find(p => p.id === productId)
    console.log(product)
    if(!product){
      throw boom.notFound('No se encontró el producto')
    }
    if(product.isBlock){
      throw boom.conflict('El producto está bloqueado')
    }
    return product
  }

  async update(productId, data) {
    const productIndex = this.products.findIndex(p => p.id === productId)
    // console.log(productIndex)
    if(productIndex === -1){
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

  async delete(productId) {
    const productIndex = this.products.findIndex(p => p.id = productId)
    if(productIndex == -1){
      throw boom.notFound('No se encontró producto')
    }
    this.product.splice(productIndex, 1)
    return {productIndex}
  }
}

module.exports = ProductService
