// db.js
const { Client } = require('pg');

// Set up the connection to your Railway PostgreSQL database
const client = new Client({
  connectionString: process.env.DATABASE_URL, // Use the Railway connection string
  ssl: {
    rejectUnauthorized: false, // Required for remote connections like Railway
  },
});

client.connect()
  .then(() => console.log("Connected to the database"))
  .catch(err => console.error("Database connection error", err.stack));

module.exports = client;
