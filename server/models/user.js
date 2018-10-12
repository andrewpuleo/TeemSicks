module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    user_id: DataTypes.STRING,
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
  }, {});
  ToDo.associate = function (models) {
    // associations can be defined here
  };

  return ToDo;
};
