import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ToppingsDiscount = sequelize.define('ToppingsDiscount', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  amount: DataTypes.FLOAT,
  orderline_toppings_id: DataTypes.INTEGER,
}, {
  tableName: 'toppings_discount',
  paranoid: true,
  timestamps: true,
 
});

export default ToppingsDiscount;
