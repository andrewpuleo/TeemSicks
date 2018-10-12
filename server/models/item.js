module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    productid: DataTypes.STRING,
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.NUMBER,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {});
  ToDo.associate = function (models) {
    // associations can be defined here
  };

  return ToDo;
};
