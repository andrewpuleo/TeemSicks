'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Miscs', [{
        purpose: 'hours-week',
        description: 'M-F: 8am - 5pm',
        addressId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Miscs', null, {});
  }
};
