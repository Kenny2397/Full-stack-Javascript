const faker = require('faker')
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
      })
    }
  }

  create({name, price, image}) {
    const newProduct = {
      id: faker.datatype.uuid(),
      name,
      price,
      image
    }
    this.products.push(newProduct)
    return newProduct
  }
  find() {
    return this.products
  }

  findOne(productId) {
    const product = this.products.find(p => p.id = productId)
    return product
  }

  update(productId, data, next) {
    const productIndex = this.products.findIndex(p => p.id = productId)
    if(productIndex == -1){
      next('No se encontró producto')
    }
    const product = this.products[productIndex]
    const updatedProduct = {
      ...product,
      ...data
    }
    this.products[productIndex] = updatedProduct
    return updatedProduct
  }

  delete(productId, next) {
    const productIndex = this.products.findIndex(p => p.id = productId)
    if(productIndex == -1){
      next('No se encontró producto')
    }
    this.product.splice(productIndex, 1)
    return {productIndex}
  }
}

module.exports = ProductService
