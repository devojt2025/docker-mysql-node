import { Sequelize } from "sequelize";

import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import path from 'path';

// These two lines recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });


const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    logging: false, // Set to true for debugging
    define: {
      timestamps: true,
      paranoid: true, // Enables soft delete
    },
  }
);

export default sequelize;
