'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RefreshToken.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  RefreshToken.init({
    user_id: DataTypes.INTEGER,
    token: DataTypes.TEXT,
    expires_at: DataTypes.DATE,
    revoked: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'RefreshToken',
    underscored: true,
  });
  return RefreshToken;
};