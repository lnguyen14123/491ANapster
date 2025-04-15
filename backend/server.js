require('dotenv').config();  // Load the variables from .env

const express = require('express');
const app = express();
const client = require('./db');  // Import the db.js file
const cors = require('cors');
app.use(cors());  // Enable CORS for all routes

app.use(express.json()); // For parsing JSON bodies

console.log("hi")
app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    res.status(500).send('Internal Server Error');
  });
  
app.get('/', (req, res) => {
    console.log("Received GET /");
    res.send("Hello from the backend!");
  });

  // Get all users from the "User" table
app.get('/users', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM "User"');
    res.json(result.rows); // Send the users as a JSON response
  } catch (err) {
    console.error('Error querying users:', err);
    res.status(500).send('Server error');
  }
});

app.post('/test', (req, res) => {
    console.log("Test POST hit");
    res.send("OK");
  });
  

// POST /users
app.post('/users', async (req, res) => {
    console.log('POST /users hit'); // <--- logs when route is hit
    console.log('Request body:', req.body); // <--- logs body
  
    const { userID, name, email, age, country, cityName } = req.body;
  
    try {
      const result = await client.query(
        'INSERT INTO "User" (userID, name, email, age, country, cityName) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [userID, name, email, age, country, cityName]
      );
      console.log('User inserted:', result.rows[0]); // <--- logs success
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error('Error adding user:', err); // <--- logs error
      res.status(500).send('Server error');
    }
  });
    

  app.get('/cities', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM "city"');
      res.json(result.rows); // Send the cities as a JSON response
    } catch (err) {
      console.error('Error querying cities:', err);
      res.status(500).send('Server error');
    }
  });
  
  // POST /cities - Add a new city to the "City" table
  app.post('/cities', async (req, res) => {
    console.log('POST /cities hit');
    console.log('Request body:', req.body);
  
    const {cityName, country } = req.body;  // Adjust based on your actual table structure
  
    try {
      const result = await client.query(
        'INSERT INTO "city" (cityName, country) VALUES ($1, $2) RETURNING *',
        [cityName, country]
      );
      console.log('City inserted:', result.rows[0]);  // Log the inserted city
      res.status(201).json(result.rows[0]);  // Respond with the inserted city
    } catch (err) {
      console.error('Error adding city:', err);
      res.status(500).send('Server error');
    }
  });
  
  


// Start the server
//const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log("Loaded DB URL:", process.env.DATABASE_URL);
