import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// set pool to connect to database

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // allow self-signed certs (Neon default)
  },
});
