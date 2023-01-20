'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_orders', {
      id_order: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cart: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_item: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total_harga: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      code_payment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
       //Default API
       created_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      deleted_at: {
        type: Sequelize.DATE
      }
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_orders');
  }
};