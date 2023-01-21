'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tm_users', {
      
  // Attribute
        id_user: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nama_user: {
          type: Sequelize.STRING,
          allowNull: false
        },
        noreg_user: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false
        },
        no_telp: {
          type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('tm_users');
  }
};