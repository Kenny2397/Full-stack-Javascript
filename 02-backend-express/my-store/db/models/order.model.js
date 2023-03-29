const { Model, DataTypes, Sequelize } = require('sequelize')

const { CUSTOMER_TABLE } = require('./customer.model')

const ORDER_TABLE = 'orders'

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    References: {
      model: CUSTOMER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  subtotal: {
    allowNull: false,
    type: DataTypes.VIRTUAL,
    get () {
      if (this.items.length > 0) {
        const subtotal = this.items.reduce((accumulator, currentValue) => {
          const price = currentValue.price
          const amount = currentValue.OrderProduct.amount
          return accumulator + price * amount
        }, 0)
        return subtotal
      }
      return 0
    }
  }

}

class Order extends Model {
  static associate (models) {
    this.belongsTo(models.Customer, {
      as: 'customer'
    })

    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = { Order, OrderSchema, ORDER_TABLE }
