import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ToppingsDiscount = sequelize.define('ToppingsDiscount', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  orderline_topping_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  amount: DataTypes.FLOAT,
}, {
  tableName: 'toppings_discount',
  paranoid: true,
  timestamps: true,
 
});

export default ToppingsDiscount;
