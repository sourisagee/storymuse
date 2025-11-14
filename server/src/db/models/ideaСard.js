'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IdeaCard extends Model {
    static associate(models) {
      IdeaCard.belongsTo(models.User, { foreignKey: 'inspirer_id', as: 'inspirer'})
    }
  }
  IdeaCard.init({
    image_url: DataTypes.STRING,
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    description: DataTypes.TEXT,
    inspirer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IdeaCard',
  });
  return IdeaCard;
};