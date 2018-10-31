'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING
      },
      Brand: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.DOUBLE
      },
      onSale: {
        type: Sequelize.BOOLEAN
      },
      salePrice: {
        type: Sequelize.DOUBLE
      },
      productDescription: {
        type: Sequelize.STRING
      },
      inStock: {
        type: Sequelize.BOOLEAN
      },
      amountInStock: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      photoUrl: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Products');
  }
};