import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const OrderlineToppings = sequelize.define('OrderlineToppings', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  topping_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  type: DataTypes.STRING,
  price: DataTypes.FLOAT,
  quantity: DataTypes.INTEGER,
  remote_code: DataTypes.STRING,
  parent_toppings_id: DataTypes.INTEGER,
  orderline_id: DataTypes.INTEGER,
}, {
  tableName: 'orderline_toppings',
  paranoid: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

export default OrderlineToppings;
