import express from 'express';
import { pg_client, mongodb_client } from './config.js';

async function main() {
  try {
    const hostname = 'localhost';
    const port = 4000;

    await mongodb_client.connect();
    const mongodb_database = mongodb_client.db('mongo_db');

    const app = express();
    app.use(express.json());

    app.get('/', (req, res) => {
      try {
        return res.status(200).json({ success: true, message: 'Hello Docker !' });
      } catch (error) {
        return res.status(500).json({ success: false, message: 'get pg failed', error: error });
      }
    });

    // pg routes
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

        return res.status(200).json({ success: true, message: 'pg create table success', response: response });
      } catch (error) {
        return res.status(400).json({ success: false, message: 'pg create table error', error: error });
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
        return res.status(200).json({ success: true, message: 'pg create user success', response: response });
      } catch (error) {
        return res.status(400).json({ success: false, message: 'pg create user error', error: error });
      }
    });

    app.get('/pg/users', async (req, res) => {
      try {
        const response = await pg_client.query(
          `
      SELECT * FROM users;
      `
        );

        return res.status(200).json({ success: true, message: 'pg get users success', response: response });
      } catch (error) {
        return res.status(400).json({ success: false, message: 'pg get users failed', error: error });
      }
    });

    // mongodb routes
    app.post('/mongo/create_collection', async (req, res) => {
      try {
        const response = await mongodb_database.createCollection('users');
        return res.status(200).json({ success: true, message: 'mongodb create collection success', response: response.collectionName });
      } catch (error) {
        console.log('create_collection', error);
        return res.status(400).json({ success: false, message: 'mongodb create collection error', error: error });
      }
    });

    app.post('/mongo/create_user', async (req, res) => {
      try {
        const { name, age } = req.body;
        const users_collection = mongodb_database.collection('users');

        const response = await users_collection.insertOne({
          name: name,
          age: age,
        });

        return res.status(200).json({ success: true, message: 'mongodb create user success', response: response });
      } catch (error) {
        return res.status(400).json({ success: false, message: 'mongodb create user error', error: error });
      }
    });

    app.get('/mongo/users', async (req, res) => {
      try {
        const users_collection = mongodb_database.collection('users');

        const users = await users_collection.find().toArray();

        return res.status(200).json({ success: true, message: 'mongodb get users success', users: users });
      } catch (error) {
        return res.status(400).json({ success: false, message: 'mongodb get users failed', error: error });
      }
    });

    app.listen(port, () => {
      console.log(`server listening at: http://${hostname}:${port}`);
    });
  } catch (error) {
    console.log('[Error]:', error);
    await pg_client.end();
    await mongodb_client.close();
  }
}

main();
