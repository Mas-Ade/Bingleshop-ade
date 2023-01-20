'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('tb_keranjang', {

       id_keranjang: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        id_user: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        id_item: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        total_item: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        total_harga: {
          type: Sequelize.DOUBLE,
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
