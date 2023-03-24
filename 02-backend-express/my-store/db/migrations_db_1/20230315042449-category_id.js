'use strict';
const {DataTypes} = require('sequelize')

const { PRODUCT_TABLE } = require('../models/product.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(PRODUCT_TABLE, 'category_id', {
      field: 'category_id',
      allowNull: false,
      type: DataTypes.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
