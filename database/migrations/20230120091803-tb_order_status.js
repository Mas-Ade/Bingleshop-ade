'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up (queryInterface, Sequelize) {
     await queryInterface.createTable('tb_status_order', {

       id_status_order: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        id_order: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        id_user: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        payment_status: {
          type: Sequelize.STRING,
          allowNull: false
        },
        delivery_date: {
          type: Sequelize.DATE,
          allowNull: false
        },
        receive_date: {
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
     
      })
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
