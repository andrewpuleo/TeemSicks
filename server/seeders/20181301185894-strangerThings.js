'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 3,
        productName: 'Stranger Things',
        Brand: 'Schwinn',
        Price: 575.00,
        onSale: false,
        salePrice : 575.00,
        productDescription : "Stranger Things lovers can snap up a sweet limited-edition Schwinn bike fashioned after the one ridden by Mike Wheeler, one of the young protagonists in the spooky, nostalgic, and wildly popular Netflix series set in the 1980s. As fans of the show know, bikes play a central and iconic role in the series, as the four main prepubescent characters freewheel around town to socialize, seek adventure, and, more often than not, frantically pedal away from grave danger in the form of all things from the Upside Down.",
        inStock : true,
        amountInStock : 1,
        photoUrl : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/stranger-things-schwinn-1528137313.jpeg?crop=1xw:1xh;center,top&resize=480:*',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
