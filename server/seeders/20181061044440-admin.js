'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        userType: 0,
        firstName: 'Kris',
        lastName: 'Fox',
        phone: 1234567,
        email: 'johndoe@gmail.com',
        userName : 'admin',
        password : 'administrator',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
