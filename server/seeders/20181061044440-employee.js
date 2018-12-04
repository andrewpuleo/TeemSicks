'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        userType: 1,
        firstName: 'Freddie',
        lastName: 'McFarmer',
        phone: 1234567,
        email: 'fmcfarmer@gmail.com',
        userName : 'ffarmer',
        password : 'employee',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
