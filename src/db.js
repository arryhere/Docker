import pg from 'pg';

export const client = new pg.Client({
  host: 'postgres',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'postgres',
});
