import pg from 'pg';

export const pool = new pg.Pool({
  host: 'db',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'postgres',
});
