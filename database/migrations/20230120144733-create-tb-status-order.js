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
        allowNull: false
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      payment_status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      delivery_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      received_date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('tb_status_orders');
  }
};