const faker = require('faker')
const boom = require('@hapi/boom')
class ProductService {

  constructor() {
    this.products = []
    this.generate()
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
    const product = this.products.find(product => product.name === data.name)
    if(product){
      throw boom.conflict('El nombre del producto ya se encuentra registrado')
    }
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  find() {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve(this.products)
      }, 3000)
    })
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
