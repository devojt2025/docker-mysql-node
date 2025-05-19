import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const DeliveryFee = sequelize.define('DeliveryFee', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  value: DataTypes.FLOAT,
  orders_id: DataTypes.INTEGER,
}, {
  tableName: 'delivery_fee',
  paranoid: true,
  timestamps: true,
  
});

export default DeliveryFee;
