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
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
});

export default DeliveryFee;
