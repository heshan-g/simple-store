const express = require('express');
require('dotenv').config();

const db = require('./config/db');

const app = express();

// Promisify the Express app's listen method
app.listen = require('util').promisify(app.listen);

app.get('/', async (req, res) => {
  res.status(200).send('Listening to requests...');
});

const port = process.env.PORT || 4000;

(async () => {
  try {
    // Listen to incoming requests
    await app.listen(port);
    console.log(`✅ Server: listening on port ${port}`);

    // Connect to database
    await db.connect();
    console.log('✅ DB connection successful');
  } catch (err) {
    console.log('❌ Server:', err);
  }
})();
