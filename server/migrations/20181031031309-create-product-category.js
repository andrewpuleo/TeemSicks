'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProductCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
               model: 'Products',
               key: 'id',
          }
      },
      categoryId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
               model: 'Categories',
               key: 'id',
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ProductCategories');
  }
};
