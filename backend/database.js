import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getNotes() {
    const [result] = await pool.query('SELECT * FROM note_details')
    return result;
}

export async function getNote(id){
    const [result] = await pool.query('SELECT * FROM note_details WHERE id = ?', [id]);
    return result[0];
}

export async function createNote(title, content) {
    const [result] = await pool.query('INSERT INTO note_details (title, contents) VALUES (?, ?)', [title, content]);
    const note = await getNote(result.insertId)
    return note;
}

