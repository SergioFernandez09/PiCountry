const { DataTypes } = require('sequelize');
// const { sequelize } = require('../db');

module.exports = (sequelize) => {
  sequelize.define('Pais', {
    ID: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: DataTypes.STRING,
    area: DataTypes.FLOAT,
    population: DataTypes.INTEGER
  }, { timestamps: false });

  
};
