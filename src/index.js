require('dotenv').config();
const express = require('express');
const v1Routes = require('./routes/v1');
const { connect: connectToDB } = require('./config/mongoDB');

const port = process.env.PORT || 4000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/', async (req, res) => {
  res.status(200).send('Listening to requests...');
});

app.use('/v1', v1Routes);

// Start server and connect to the DB
app
  .listen(port, () => {
    console.log(`✔️  The server is listening on port ${port}`);
    connectToDB();
  })
  .on('error', (err) => {
    console.log('❌ Server failed to start.', err);
  });
