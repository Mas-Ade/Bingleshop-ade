'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_status_orders', {
      
      id_status_order: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_order: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "tb_orders",
          key: "id_order",

        }
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references : {
          model: "tm_users",
          key: "id_user",
        }
      },
      payment_status: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      delivery_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      received_date: {
        type: Sequelize.DATE,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_status_orders');
  }
};