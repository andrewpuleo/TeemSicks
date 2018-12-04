'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 0,
        productName: 'Surge Adult',
        Brand: 'Bell Sports',
        Price: 40.00,
        onSale: true,
        salePrice : 32.93,
        productDescription : "The helmet you've been looking for, and the only helmet you'll ever need. Designed by Kris Fox himself, this bad boy is guaranteed to keep you alive in even the roughest crashes. Thats right, you can even take it base jumping. Rumor has it that Fox once survived a 70 foot rock climbing fall wearing nothing on his body except this helmet. Buy it before its gone because they will never be produced again. True Fit self-adjusting fit system with lights, 17 vents, Pinchguard buckle, visor and tapeless technology and baseguard. Fits head sizes 56-60 cm",
        inStock : true,
        amountInStock : 1,
        photoUrl : 'https://i5.walmartimages.ca/images/Large/962/290/999999-35011962290.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
