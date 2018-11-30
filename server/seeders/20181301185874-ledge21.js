'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 2,
        productName: 'Ledge 2.1',
        Brand: 'Mongoose',
        Price: 125.00,
        onSale: true,
        salePrice : 119.00,
        productDescription : "Kids can push it to the limit with this 24-inch Mongoose Ledge 2.1 Boys' Mountain Bike. This sleek yet rugged bike comes in silver and red for a fun and fierce color combination. The Mongoose mountain bike is lightweight and constructed from an aluminum suspension frame that features a suspension fork for a smooth ride and increased control. In addition, the bike features 21 different speeds to handle a variety of terrains, including up steep hills or just riding around the neighborhood. The shifter three-piece crank helps the bike transition smoothly from one gear to another. The silver/red mountain bike has a number of features, including a padded seat and linear pull brakes that provide strong braking power. ",
        inStock : true,
        amountInStock : 7,
        photoUrl : 'https://i5.walmartimages.com/asr/0000676e-1c78-42f7-87ad-942e130bc47e_1.4862a6db3a2ac1a519441a1d0002d147.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
