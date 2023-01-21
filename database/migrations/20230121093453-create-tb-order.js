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
        allowNull: false,
        references : {
          model: "tb_carts",
          key: "id_cart",
          as: "id_cart"
        }
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "tm_users",
          key: "id_user",
          as: "id_user"
        }
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