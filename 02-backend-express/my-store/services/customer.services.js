const boom = require('@hapi/boom')
const pool = require('./../libs/postgres.pool')
// const sequelize = require('./../libs/sequelize')
const { models } = require('./../libs/sequelize')

class CustomerService {

  constructor() {
    this.pool = pool
    this.pool.on('error', err => console.error(err))
  }

  async create(body) {
    const newCustomer = models.Customer.create(body)
    return newCustomer
  }

  async find() {
    // const query = 'SELECT * FROM TASKS'
    // const [data, metadata] = await sequelize.query(query)
    const rta = models.Customer.findAll()
    return rta
  }

  async findOne(customerId) {
    // const product = this.products.find(p => p.id === productId)
    // console.log(product)
    // if(!product){
    //   throw boom.notFound('No se encontró el producto')
    // }
    // if(product.isBlock){
    //   throw boom.conflict('El producto está bloqueado')
    // }
    const customer = await models.Customer.findByPk(customerId)
    console.log("----" + customer)
    if (!customer) {
      throw boom.conflict('customer not found!')
    }
    return customer
  }

  async update(customerId, data) {
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

    const customerUpdated = await models.Customer.update({
      ...data
    }, {
      where: {
        id: customerId
      }
    })
    return customerUpdated
  }

  async delete(customerId) {
    // const productIndex = this.products.findIndex(p => p.id = productId)
    // if (productIndex == -1) {
    //   throw boom.notFound('No se encontró producto')
    // }
    // this.product.splice(productIndex, 1)

    const customer = await models.Customer.findByPk(customerId)

    if (!customer) {
      throw boom.conflict('customer not found')
    }

    await models.Customer.destroy({
      where: {
        id: customerId
      }
    })
    return 1
  }
}

module.exports = CustomerService
