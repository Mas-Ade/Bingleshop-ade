'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_items', {

      id_item: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      code_item: {
        type: Sequelize.STRING,
        allowNull: true
      },
      nama_item: {
        type: Sequelize.STRING,
        allowNull: true
      },
      harga: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stock: {
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
    await queryInterface.dropTable('tb_items');
  }
};

