'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 1,
        productName: 'Citizen',
        Brand: 'Gotham7',
        Price: 749,
        onSale: true,
        salePrice : 379.00,
        productDescription : "The GOTHAM7 Citizen Bike is our multi-speed version of the acclaimed GOTHAM series. It's a folding bike that is designed as a light and swift commuter – a boldly styled urban ride that is at home on the city streets. It's a folding bike for going and being human.",
        inStock : true,
        amountInStock : 1,
        photoUrl : 'http://www.citizenbike.com/images/gotham_7_1000px_red.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
