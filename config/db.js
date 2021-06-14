const mongoose = require('mongoose');

const connect = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
        // useCreateIndex: true
      }
    );

    // console.log('✅ DB connection successful');
    return;
  } catch (err) {
    // console.log('❌ DB connection error.', err);
    throw err;
  }
};

module.exports = { connect };
