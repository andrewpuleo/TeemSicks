'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 3,
        productName: '26\" Tandem',
        Brand: 'Kulana Lua',
        Price: 210.00,
        onSale: true,
        salePrice : 190.00,
        productDescription : "The Kulana Lua Tandem Bike 26 is here to take the fun factor of tandem biking to a new level. Two extra large and comfortable cruiser saddles are mounted on a stylish yellow HI-Ten cruiser frame, with easy reach handlebars and fun beach graphics. The frame, graphics and the whitewall tyres together present a colorful look to the tandem bicycle. Be assured of years of exercise and fun while touring around on bike paths, light trails, or when cruising along a quiet beachside lane. The super-relaxed riding position and padded seats are tailor-made and lets you enjoy the scenery while having fun with your family. The integrated rear coast brakes showcase powerful braking irrespective of the weather conditions. Half wrap front and rear fenders are employed in the Hi-Ten steel bike to add further convenience in diverse weather conditions.",
        inStock : true,
        amountInStock : 1,
        photoUrl : 'https://i5.walmartimages.com/asr/bdb89a19-b2d7-4b14-b62d-5f1675e82283_1.6c8c01d08df3f6ee97629780170d9bce.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
