'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InsuranceType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      // define association here
    }
  }
  InsuranceType.init({
    name: {
      type: DataTypes.CITEXT,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'InsuranceType',
    timestamps: false,
  });
  return InsuranceType;
};