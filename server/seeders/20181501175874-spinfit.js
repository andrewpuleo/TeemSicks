'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productName: 'SpinFit',
        Brand: 'Hyper',
        Price: 600.00,
        onSale: false,
        salePrice : 600.00,
        productDescription : "Take a short spin around your neighborhood or a long ride through the hills when you cruise comfortably on the 700c Hyper SpinFit Adult Hybrid Bike, which allows you to enjoy both styles of biking. The beauty of this hybrid bike is that it marries mountain bike and road bike styles, so you can enjoy both in one. Featuring a lightweight aluminum frame joined with a Shimano drive tra 21-speed Shimano shifter set and Shimano rear derailleur. It also comes equipped with low profile, high-performance tires to ensure a safe and fun ride. The aluminum hybrid bike has front and rear caliper brakes too for reliable stopping power.",
        inStock : true,
        amountInStock : 8,
        photoUrl : 'https://i5.walmartimages.com/asr/9545e68a-8ce7-417d-bbe3-feb8b148fc28_1.5154c1f35380566d60d426b83a84953b.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
