import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Sponsorships = sequelize.define(
  "Sponsorships",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_discount_id: DataTypes.INTEGER,
    orderline_discount_id: DataTypes.INTEGER,
    toppings_discount_id: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    name: DataTypes.STRING,
  },
  {
    tableName: "sponsorships",
    paranoid: true,
    timestamps: true,
  }
);

export default Sponsorships;
