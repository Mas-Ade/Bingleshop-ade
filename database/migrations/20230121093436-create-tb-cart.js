'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_carts', {

      id_cart: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "tm_users",
          key: "id_user",
          as: "id_user"
        }
      },
      id_item: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "tb_items",
          key: "id_item",
        }
      },
      status_cart: {
        type: Sequelize.STRING,
        allowNull: true
      },
      qty_item: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      total_harga: {
        type: Sequelize.DOUBLE,
        allowNull: true
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
   
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_carts');
  }
};