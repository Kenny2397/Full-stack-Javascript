const boom = require('@hapi/boom')
const pool = require('./../libs/postgres.pool')
// const sequelize = require('./../libs/sequelize')
const { models } = require('./../libs/sequelize')

class UserService {

  constructor(){
    this.pool = pool
    this.pool.on('error', err => console.error(err))
  }

  async create() {

  }

  async find() {
    // const query = 'SELECT * FROM TASKS'
    // const [data, metadata] = await sequelize.query(query)
    const rta = models.User.findAll()
    return rta
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

module.exports = UserService
