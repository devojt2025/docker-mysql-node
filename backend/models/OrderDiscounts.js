import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const OrderDiscounts = sequelize.define('OrderDiscounts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  orders_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'order_discounts',
  paranoid: true,             // enables soft deletes with deleted_at
  timestamps: true,           // enables created_at and updated_at
  createdAt: 'created_at',    // use snake_case columns
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

export default OrderDiscounts;
