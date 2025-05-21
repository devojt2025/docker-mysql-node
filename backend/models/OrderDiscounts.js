import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const OrderDiscounts = sequelize.define('OrderDiscounts', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'order_discounts',
  paranoid: true,             // enables soft deletes with deleted_at
  timestamps: true,           // enables created_at and updated_at
  
});

export default OrderDiscounts;
