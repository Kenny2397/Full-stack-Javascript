const boom = require('@hapi/boom')
const pool = require('./../libs/postgres.pool')
// const sequelize = require('./../libs/sequelize')
const { models } = require('./../libs/sequelize')

class UserService {

  constructor() {
    this.pool = pool
    this.pool.on('error', err => console.error(err))
  }

  async create(body) {
    const rta = await models.User.create(body)
    return rta
  }

  async find() {
    // const query = 'SELECT * FROM TASKS'
    // const [data, metadata] = await sequelize.query(query)
    const rta = models.User.findAll()
    return rta
  }

  async findOne(userId) {
    // const product = this.products.find(p => p.id === productId)
    // console.log(product)
    // if(!product){
    //   throw boom.notFound('No se encontró el producto')
    // }
    // if(product.isBlock){
    //   throw boom.conflict('El producto está bloqueado')
    // }
    const user = await models.User.findOne(userId)
    if (!user) {
      throw boom.conflict('User not found!')
    }
    return user
  }

  async update(userId, data) {
    // const productIndex = this.products.findIndex(p => p.id === productId)
    // // console.log(productIndex)
    // if (productIndex === -1) {
    //   throw boom.notFound('No se encontró el producto')
    // }
    // const product = this.products[productIndex]
    // const updatedProduct = {
    //   ...product,
    //   ...data
    // }
    // this.products[productIndex] = updatedProduct

    const userUpdated = await models.User.update(userId, data)
    return userUpdated
  }

  async delete(userId) {
    // const productIndex = this.products.findIndex(p => p.id = productId)
    // if (productIndex == -1) {
    //   throw boom.notFound('No se encontró producto')
    // }
    // this.product.splice(productIndex, 1)
    const user = await models.User.findOne(userId)
    await user.destroy()

    return userId
  }
}

module.exports = UserService