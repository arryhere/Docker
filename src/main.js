import express from 'express';
import { pg_client } from './config.js';

async function main() {
  try {
    const hostname = 'localhost';
    const port = 4000;

    const app = express();

    app.use(express.json());

    // pg routes

    app.get('/pg', (req, res) => {
      try {
        return res.status(200).json({ success: true, message: 'Hello PG !' });
      } catch (error) {
        return res.status(500).json({ success: false, message: 'get pg failed', error: error });
      }
    });

    app.post('/pg/create_table', async (req, res) => {
      try {
        const response = await pg_client.query(
          `
      CREATE TABLE users (
        id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(10) NOT NULL,
        age INT
      );
      `
        );

        res.status(200).json({ success: true, message: 'pg create table success', response: response });
      } catch (error) {
        res.status(400).json({ success: false, message: 'pg create table error', error: error });
      }
    });

    app.post('/pg/create_user', async (req, res) => {
      try {
        const { name, age } = req.body;

        const response = await pg_client.query(
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
        res.status(200).json({ success: true, message: 'pg create user success', response: response });
      } catch (error) {
        res.status(400).json({ success: false, message: 'pg create user error', error: error });
      }
    });

    app.get('/pg/users', async (req, res) => {
      try {
        const response = await pg_client.query(
          `
      SELECT * FROM users;
      `
        );

        res.status(200).json({ success: true, message: 'pg get users success', response: response });
      } catch (error) {
        res.status(400).json({ success: false, message: 'pg get users failed', error: error });
      }
    });

    // mongodb routes

    app.listen(port, () => {
      console.log(`server listening at: http://${hostname}:${port}`);
    });
  } catch (error) {
    console.log('[Error]:', error);
  }
}

main();
