'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // async default dari migration
  async up (queryInterface, Sequelize) {
    
     
      await queryInterface.createTable('tm_users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        full_name: {
          type: Sequelize.STRING,
          allowNull: true
        },
        address: {
          type: Sequelize.STRING,
          allowNull: true
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
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

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('tm_users');
     
  }
};
