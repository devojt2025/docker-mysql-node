import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const OrderlineDiscounts = sequelize.define('OrderlineDiscounts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  amount: DataTypes.FLOAT,
  orderline_id: DataTypes.INTEGER,
}, {
  tableName: 'orderline_discount',
  paranoid: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

export default OrderlineDiscounts;
