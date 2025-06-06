import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import path from 'path';

// These two lines recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export default {
    development: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE_2,
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
    },
    test: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE_2,
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
    },
    production: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE_2,
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
    }
};
