
const { models } = require('../libs/sequelize')
class CategoryService {
  async create (data) {
    const newCategory = await models.Category.create(data)
    return newCategory
  }

  async find () {
    const categories = await models.Category.findAll({
      include: ['products']
    })
    return categories
  }

  async findOne (id) {
    const category = await models.Category.findByPk(id, {
      include: ['products']
    })
    return category
  }

  async update (id, changes) {
    return { id, changes }
  }

  async delete (id) {
    return { id }
  }
}
module.exports = CategoryService
