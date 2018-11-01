'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productName: 'Beach Cruiser',
        Brand: 'Firmstrong',
        Price: 200.00,
        onSale: false,
        salePrice : 150.00,
        productDescription : "The Urban Man Single Speed Beach Cruiser is a classic cruiser bike that rides smooth and pedals easy.  An ideal men’s bicycle for the guy in need of a bike for casual riding whether it be with friends, around town, by the beach or in the city. ",
        inStock : true,
        amountInStock : 4,
        photoUrl : 'app/public/beach_cruiser_image.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
