'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    //orderId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    addressId: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User);
    Order.hasOne(models.Address);
    Order.hasMany(models.OrderItem);
  };

  return Order;

};
