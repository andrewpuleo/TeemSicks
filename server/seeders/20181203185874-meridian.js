'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productName: 'Meridian',
        Brand: 'Schwinn',
        Price: 299.99,
        onSale: false,
        salePrice : 299.99,
        productDescription : "Not only does it get you outside in the fresh air and sunshine; it's a fun, invigorating physical pursuit that's just as enjoyable whether you're out by yourself or with a group of pals. That being said, bicycles aren't everyone's cup of tea & balancing on two wheels can be unnerving, particularly if you've fallen off a bike before (or never learned to ride). Experience a new kind of freedom while cycling on this Adult 26 inch Schwinn Meridian Tricycle. With a low stand-over, easy step-through aluminum frame and rear folding basket, this cherry adult tricycle can safely and smoothly get you where you need to go. With a comfort saddle, inclusive storage and an easy to operate single speed design, the Adult 26 inch Schwinn Meridian Tricycle is sure to become a commuting favorite. ",
        inStock : true,
        amountInStock : 4,
        photoUrl : 'https://i5.walmartimages.com/asr/f7537000-361f-4a18-84fd-c09391f3cee8_1.6136cd4a5b8759955eb71f54d7200e9f.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
