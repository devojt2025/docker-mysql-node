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
  timestamps: true,
  underscored: true,
  paranoid: true,  
});

export default OrderDiscounts;
