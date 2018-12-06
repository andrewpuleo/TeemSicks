'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 3,
        productName: 'Fairhaven',
        Brand: 'Schwinn',
        Price: 215.00,
        onSale: true,
        salePrice : 149.00,
        productDescription : "Comfortable, functional and fun, this stylish 26 inch Schwinn Fairhaven Women\'s 7-speed Cruiser Bike is ideal for a relaxed and enjoyable ride -- and did we mention that it\'s also super stylish? You\'ll have a blast cruising around the neighborhood or on your favorite bike trails with friends and family. It features 7-speed grip shift shifters with Shimano rear derailleur for quick shifts and alloy linear pull brakes for quick stops. The women\'s cruiser bike in cream has a retro-style frame and swept-back handlebars which give it an adorable vintage look. The rear rack is practical and adds to the retro vintage styling. This bike has a spring saddle for comfort. It keeps you in an upright riding position. The 26 inch cruiser bike has rims that match the paint and inserts on the pedals that match. This bike is stylish and color coordinated. Fenders add to the style and provide protection so you can ride in all weather without getting your clothes wet.",
        inStock : true,
        amountInStock : 7,
        photoUrl : 'https://i5.walmartimages.com/asr/70d856c7-a568-409e-b753-5809f7397937_1.40fee5f30617d9934905f11dd13f4e93.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
