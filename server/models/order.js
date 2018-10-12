module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    id: DataTypes.STRING,
    date: DataTypes.NUMBER,
    num_items: DataTypes.NUMBER,
    price: DataTypes.NUMBER,
  }, {});
  ToDo.associate = function (models) {
    // associations can be defined here
  };

  order.hasMany(item, {as: 'order item'});
  order.hasOne(user, {as: "ordered by"});

  return ToDo;
};
