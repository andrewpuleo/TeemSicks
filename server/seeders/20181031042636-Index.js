'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 4,
        productName: 'Orange Index',
        Brand: 'Mongoose',
        Price: 175.48,
        onSale: false,
        salePrice : 175.48,
        productDescription : "The Mongoose Boy's 20-Inch Index Bicycle in Orange is a great bike for an active, young boy. This orange BMX freestyle bike is made from a sturdy steel frame. Its thick, 2-inch tires and cushioned nylon seat protects the rider from all his little bumps. This 20-inch bike by Mongoose has one gear speed. It is recommended for boys ages 8 years and up to 150 pounds. Some assembly is required.",
        inStock : true,
        amountInStock : 6,
        photoUrl : 'https://target.scene7.com/is/image/Target/GUEST_b839961d-1486-4f3f-b054-be8f89492996?wid=488&hei=488&fmt=pjpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
