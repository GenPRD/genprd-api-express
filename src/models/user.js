'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.RefreshToken, { foreignKey: 'user_id' });
      User.hasMany(models.Personnel, { foreignKey: 'user_id' });
      User.hasMany(models.PRD, { foreignKey: 'user_id' });
    }
  }
  User.init({
    google_id: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });
  return User;
};