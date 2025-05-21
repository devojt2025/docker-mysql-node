import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const OrderlineDiscounts = sequelize.define('OrderlineDiscounts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  orderline_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  amount: DataTypes.FLOAT,
}, {
  tableName: 'orderline_discount',
  timestamps: true,
  underscored: true,
  paranoid: true,
});

export default OrderlineDiscounts;
