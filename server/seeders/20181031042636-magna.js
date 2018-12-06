'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 4,
        productName: 'Magna Throttle',
        Brand: 'Magna',
        Price: 100,
        onSale: true,
        salePrice : 97.99,
        productDescription : "The Boy's 20\" Magna Throttle Bike is made of a durable steel frame and decorated in black and red. It features cool graphics and stylish accents for a trendy set of wheels. The braking system offers a rear coaster for solid control. This steel bike is equipped with an adjustable seat, so it can be removed as needed or adjusted as your child grows. Product Registration is fast and simple! Dynacraft BSC offers you an easy and efficient way to to register your new product. ",
        inStock : true,
        amountInStock : 13,
        photoUrl : 'https://i5.walmartimages.com/asr/061c3e49-8c2a-4ea4-812f-bfc2db0ed733_1.46497014cc36fa79503d9684f1c9ac95.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
