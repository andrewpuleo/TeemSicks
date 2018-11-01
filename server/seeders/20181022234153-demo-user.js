'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Person', [{
        userId: 'aaaa1111',
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@gmail.com'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Person', null, {});
  }
};
