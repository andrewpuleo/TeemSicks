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
        type: Sequelize.STRING
      },
      productName: {
        type: Sequelize.STRING
      },
      Brand: {
        type: Sequelize.STRING
      },
      Type: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.FLOAT
      },
      onSale: {
        type: Sequelize.BOOLEAN
      },
      salePrice: {
        type: Sequelize.FLOAT
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
