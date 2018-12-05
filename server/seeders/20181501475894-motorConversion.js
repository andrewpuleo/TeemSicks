'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 0,
        productName: 'E-bike motor conversion kit',
        Brand: 'DodoM',
        Price: 185.00,
        onSale: false,
        salePrice : 185.00,
        productDescription : "36V 500W powerful brushless gearless hub motor. Nylon tire& alloy rim& stainless steel spoke that is so durable. Brake handles allow you to safely cut off the power supply from the motor in the case of an emergency. A perfect replace kit for your electric bicycle,e-bike. High power controller guarantee big current supply. asy to use and to operate at affordable prices.",
        inStock : true,
        amountInStock : 10,
        photoUrl : 'https://i5.walmartimages.com/asr/06c99c03-ff56-428d-a05b-62ab67692108_1.6a61fa9318bed19c64b2137a803958b8.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
