const boom = require('@hapi/boom')
const pool = require('./../libs/postgres.pool')
// const sequelize = require('./../libs/sequelize')
const { models } = require('./../libs/sequelize')
const UserService = require('./user.services')
const userService = new UserService()

class CustomerService {
  constructor () {
    this.pool = pool
    this.pool.on('error', err => console.error(err))
  }

  async create (body) {
    // create user and validate if exist
    const newUser = await userService.create(body.user)

    const newCustomer = await models.Customer.create({
      ...body,
      userId: newUser.id
    })
    const userCreated = await models.Customer.findByPk(newCustomer.id, {
      include: ['user']
    })
    return userCreated
  }

  async createByIdUser (body) {
    const customerAlredyExist = await models.Customer.findOne({
      where: {
        userId: body.userId
      }
    })

    console.log('***********' + customerAlredyExist)
    if (customerAlredyExist !== null) {
      throw boom.conflict('Customer with userId is already exist!')
    }

    const newCustomer = await models.Customer.create(body)
    const userCreated = await models.Customer.findByPk(newCustomer.id, {
      include: ['user']
    })
    return userCreated
  }

  async find () {
  // const query = 'SELECT * FROM TASKS'
  // const [data, metadata] = await sequelize.query(query)
    const rta = await models.Customer.findAll({
      include: ['user']
    })
    return rta
  }

  async findOne (customerId) {
  // const product = this.products.find(p => p.id === productId)
  // console.log(product)
  // if(!product){
  //   throw boom.notFound('No se encontró el producto')
  // }
  // if(product.isBlock){
  //   throw boom.conflict('El producto está bloqueado')
  // }
    const customer = await models.Customer.findByPk(customerId, {
      include: ['user']
    })
    console.log('----' + customer)
    if (!customer) {
      throw boom.conflict('customer not found!')
    }
    return customer
  }

  async update (customerId, data) {
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

  async delete (customerId) {
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
