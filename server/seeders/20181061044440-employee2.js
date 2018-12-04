'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        userType: 1,
        firstName: 'Greg',
        lastName: 'Gregory',
        phone: 1234567,
        email: 'ggreg3@gmail.com',
        userName : 'greg',
        password : 'employee',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
