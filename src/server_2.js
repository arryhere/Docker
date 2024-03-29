import express from 'express';
import { pool } from './db.js';

const app = express();

const hostname = 'localhost';
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Helllo Docker !' });
});

app.post('/create_table', async (req, res) => {
  try {
    const response = await pool.query(
      `
      CREATE TABLE users (
        id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(10) NOT NULL,
        age INT
      );
      `
    );

    res.status(200).json({ message: 'create table success', response: response });
  } catch (error) {
    res.status(400).json({ message: 'create table error', response: error });
  }
});

app.post('/create_user', async (req, res) => {
  try {
    const { name, age } = req.body;

    const response = await pool.query(
      `
      INSERT INTO users (
        name,
        age
      )
      VALUES (
        '${name}',
        '${age}'
      );
      `
    );
    res.status(200).json({ message: 'create user success', response: response });
  } catch (error) {
    res.status(400).json({ message: 'create user error', response: error });
  }
});

app.get('/users', async (req, res) => {
  try {
    const response = await pool.query(
      `
      SELECT * FROM users;
      `
    );

    res.status(200).json({ message: 'get users success', response: response });
  } catch (error) {
    res.status(400).json({ message: 'get users failed', response: error });
  }
});

app.listen(port, () => {
  console.log(`server listening at: http://${hostname}:${port}`);
});
