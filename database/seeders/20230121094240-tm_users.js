'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('tm_users', [

      {
        nama_user: 'ade maulana',
        noreg_user: 'bg-001',
        password: '12345',
        email: 'ade@email.com',
        address: 'cikarang',
        no_telp: '12345',
      },
      {
        nama_user: 'admin 1',
        noreg_user: 'bg-002',
        password: '12345',
        email: 'admin1@email.com',
        address: 'cikarang',
        no_telp: '12345',
      },
      {
        nama_user: 'admin 1',
        noreg_user: 'bg-002',
        password: '12345',
        email: 'admin1@email.com',
        address: 'cikarang',
        no_telp: '12345',
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
