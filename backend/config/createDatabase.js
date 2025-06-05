import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Recreate __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from root
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

(async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.MYSQL_DATABASE_1}\`;`);
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.MYSQL_DATABASE_2}\`;`);
        console.log(`✅ Database "${process.env.MYSQL_DATABASE_1}" created or already exists.`);
        console.log(`✅ Database "${process.env.MYSQL_DATABASE_2}" created or already exists.`);
        await connection.end();
    } catch (error) {
        console.error('❌ Error creating database:', error.message);
    }
})();
