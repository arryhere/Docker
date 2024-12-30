import pg from 'pg';

export const pg_client = new pg.Pool({
  host: 'postgres',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'pg_db',
});


