'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'IdeaCards',
      [
        {
          image_url: 'https://u.livelib.ru/album/1000007297/o/vvbjhf2i/7_Mysterious_Libraries_in_Literature-o.jpeg',
          title: 'Забытая библиотека',
          genre: 'Мистика / Фэнтези',
          description:
            'В центре города находится библиотека, где книги оживают и открывают портал в другие миры.',
          inspirer_id: 1, // принадлежит первому вдохновителю
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url: 'https://s.widget-club.com/images/YyiR86zpwIMIfrCZoSs4ulVD9RF3/269b56df2147bba8c4f2ee0701b476b3/526aee973f82a129531f7c145944a6b5.jpg',
          title: 'Виртуальный детектив',
          genre: 'Киберпанк / Детектив',
          description:
            'Пользователь погружается в виртуальный мир, чтобы раскрыть преступление, которое произошло в реальности.',
          inspirer_id: 1, // принадлежит первому вдохновителю
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url: 'https://i.pinimg.com/564x/ff/0e/fd/ff0efd7e953e5c7d0fc87b7132df3d43.jpg',
          title: 'Последний день на планете',
          genre: 'Драма / Sci-Fi',
          description:
            'Люди узнают, что планета будет уничтожена завтра, и каждый должен принять судьбоносное решение.',
          inspirer_id: 2, // принадлежит второму вдохновителю
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('IdeaCards', null, {});
  },
};
