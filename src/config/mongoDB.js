const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_CONNECTION_STRING;

const connect = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('✔️  The MongoDB connection is established');
  } catch (err) {
    console.log('❌ The MongoDB connection failed.', err);
  }
};

module.exports = { connect };
