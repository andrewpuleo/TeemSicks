'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Miscs', [{
        purpose: 'hours-weekend',
        description: 'Sat: 10am - 4pm',
        addressId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Miscs', null, {});
  }
};
