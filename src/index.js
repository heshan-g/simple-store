require('dotenv').config();
const express = require('express');
const db = require('./config/db');
const v1Routes = require('./routes/v1');

const app = express();
app.listen = require('util').promisify(app.listen);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/', async (req, res) => {
  res.status(200).send('Listening to requests...');
});

app.use('/v1', v1Routes);

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
