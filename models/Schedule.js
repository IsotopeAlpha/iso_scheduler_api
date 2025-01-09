const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Schedule extends Model {}

Schedule.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  participants: {
    type: DataTypes.ARRAY
  },
  date: {
    type: DataTypes.DATE
  },
  date: {
    type: DataTypes.TIME
  },
}, {
  sequelize,
  modelName: 'Schedule'
});

module.exports = Schedule;