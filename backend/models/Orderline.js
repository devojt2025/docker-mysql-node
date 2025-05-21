import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Orderline = sequelize.define('Orderline', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  order_id: DataTypes.INTEGER,
  product_id: DataTypes.INTEGER,
  category_name: DataTypes.STRING,
  name: DataTypes.STRING,
  paid_price: DataTypes.FLOAT,
  quantity: DataTypes.INTEGER,
  remote_code: DataTypes.STRING,
  unit_price: DataTypes.FLOAT,
  vat_total: DataTypes.FLOAT,
  comment: DataTypes.TEXT,
  variation_name: DataTypes.STRING,
  item_unavailability_handling: DataTypes.STRING,
}, {
  tableName: 'orderline',
  paranoid: true,
  timestamps: true,
  
});

export default Orderline;
