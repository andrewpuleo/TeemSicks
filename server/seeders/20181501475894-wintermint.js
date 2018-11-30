'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
        productId: 0,
        productName: 'Berry Wintermint',
        Brand: 'Bell Sports',
        Price: 17.04,
        onSale: false,
        salePrice : 17.04,
        productDescription : "The Bell Berry helmet offers a stylish design, durability, and protection all in one package. Comes equipped with True Fit system to adjust to the perfect fit every time. Aerodynamic vents help keep cool and PinchGuard technology ensures pinch free buckling. For ages 14 and up. TrueFit system self adjusts. PinchGuard technology, head sizes 21.3 to 22.8 inches.",
        inStock : true,
        amountInStock : 2,
        photoUrl : 'https://i5.walmartimages.com/asr/69a116a7-3496-40f2-9e5c-9a8e804b882d_1.a2ec1925b30115f85058c152ac093e30.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
