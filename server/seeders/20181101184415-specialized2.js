'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 2,
        productName: 'Sequoia',
        Brand: 'Specialized',
        Price: 1400.00,
        onSale: false,
        salePrice : 1200.00,
        productDescription : "100 years ago, we didn't have road bikes and touring bikes—there were just bikes, and that didn't stop anyone from heading out into the wilderness. With this spirit, we built our groundbreaking Sequoia. It's reshaping long held ideas, and forever changing what we'll come to expect from a bike.",
        inStock : true,
        amountInStock : 4,
        photoUrl : 'https://www.landrys.com/images/library/zoom/specialized-sequoia-273914-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
