'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tm_users', [

    {
      code_item: 'item-001',
      nama_item: 'risol mayo ayam',
      harga: 10000,
      stock: 20 
    },

    {
      code_item: 'item-002',
      nama_item: 'risol mayo sosis',
      harga: 10000,
      stock: 20 
    },

    {
      code_item: 'item-003',
      nama_item: 'risol mayo daging',
      harga: 10000,
      stock: 20 
    }
  ], {});
},

    

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
