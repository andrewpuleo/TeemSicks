'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderId: DataTypes.STRING,
    userId: DataTypes.STRING,
    addressId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User);
<<<<<<< HEAD
    Order.belongsTo(models.Address);
    Order.belongsTo(models.OrderItem);
=======
    Order.hasOne(models.Address);
    Order.hasMany(models.OrderItem);
>>>>>>> 5c61d6af0b2bedf235c6d27125a04777e72a1b3d
  };

  return Order;

};
