import { Sequelize } from "sequelize";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config('../.env');
// const pool = mysql.createPool({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// }).promise()

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

// export async function getNotes() {
//     const [result] = await pool.query('SELECT * FROM note_details')
//     return result;
// }

// export async function getNote(id){
//     const [result] = await pool.query('SELECT * FROM note_details WHERE id = ?', [id]);
//     return result[0];
// }

// export async function createNote(title, content) {
//     const [result] = await pool.query('INSERT INTO note_details (title, contents) VALUES (?, ?)', [title, content]);
//     const note = await getNote(result.insertId)
//     return note;
// }
