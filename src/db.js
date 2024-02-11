import { Client } from 'pg';

export const client = new Client({
  host: 'pg_host',
  port: 5432,
  database: 'pg_db',
  user: 'pg_user',
  password: 'pg_password',
});
