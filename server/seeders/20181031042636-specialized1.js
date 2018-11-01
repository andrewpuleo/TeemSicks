'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productName: 'Rockhopper',
        Brand: 'Specialized',
        Price: 560.00,
        onSale: false,
        salePrice : 500.00,
        productDescription : "Where efficiency and capability cross paths on the trail, you'll find the Men's Rockhopper. The reasons are pretty simple. Sure, as a hardtail, it has some natural climbing ability, but what isn't so obvious is the low bottom bracket, roomy top tube, and ultra short chainstays. In other words, it puts out a planted, confident, and snappy ride over a diverse array of terrain. It's fast on the way up, and even faster on the way down.",
        inStock : true,
        amountInStock : 4,
        photoUrl : 'app/public/rockhopper_image.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
