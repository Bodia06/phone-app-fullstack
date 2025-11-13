'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date();
    await queryInterface.bulkInsert(
      'phones',
      [
        {
          model: 'Galaxy S20',
          brand: 'Samsung',
          year: '2022-02-01',
          ram: 12,
          processor: 'Snapdragon 8 Gen 9',
          screen_size: 6.4,
          has_nfc: Sequelize.literal('DEFAULT'),
          image: 'hello.jpg',
          created_at: date,
          updated_at: date,
        },
        {
          model: 'iPhone 17',
          brand: 'Apple',
          year: '2023-08-01',
          ram: 8,
          processor: 'A18 Bionic 10',
          screen_size: 6.7,
          has_nfc: false,
          image: 'hello.jpg',
          created_at: date,
          updated_at: date,
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phones', null, {});
  },
};
