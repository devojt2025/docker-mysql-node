import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Sponsorships = sequelize.define('Sponsorships', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: DataTypes.FLOAT,
  name: DataTypes.STRING,
  toppings_discount_id: DataTypes.INTEGER,
  orderline_discount_id: DataTypes.INTEGER,
  order_discounts_id: DataTypes.INTEGER,
}, {
  tableName: 'sponsorships',
  paranoid: true,
  timestamps: true,
  
});

export default Sponsorships;
