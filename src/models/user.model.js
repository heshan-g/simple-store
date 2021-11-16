const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [(value) => isEmail(value), 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
