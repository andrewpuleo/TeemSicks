'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        userType: 2,
        firstName: 'John',
        lastName: 'Doe',
        phone: 1234567,
        email: 'johndoe@gmail.com',
        userName : 'jdoe',
        password : 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
