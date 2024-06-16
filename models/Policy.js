const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Policy = sequelize.define('Policy', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dob: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sumAssured: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  premium: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  term: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  premiumFrequency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  premiumPayingTerm: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  benefits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Policy;
