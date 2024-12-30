import pg from 'pg';
import { MongoClient } from 'mongodb';

export const pg_client = new pg.Pool({
  host: 'postgres',
  port: 5432,
  user: 'root',
  password: 'password',
  database: 'pg_db',
});

export const mongodb_client = new MongoClient('mongodb://root:password@mongodb:27017/mongo_db?authSource=admin');
