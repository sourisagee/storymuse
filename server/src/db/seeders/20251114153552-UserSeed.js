'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'inspirer1',
          email: 'inspirer1@example.com',
          password: await bcrypt.hash('Password123!', 10),
          role: 'inspirer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'inspirer2',
          email: 'inspirer2@example.com',
          password: await bcrypt.hash('Password123!', 10),
          role: 'inspirer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'writer1',
          email: 'writer1@example.com',
          password: await bcrypt.hash('Password123!', 10),
          role: 'writer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'writer2',
          email: 'writer2@example.com',
          password: await bcrypt.hash('Password123!', 10),
          role: 'writer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
