const { User } = require('../models/user.model');

const createUser = async (userBody) => {
  let isError = false;
  let data = null;

  const newUser = new User(userBody);

  try {
    data = await newUser.save();
  } catch (error) {
    // console.log('Caught error', error);

    isError = true;
    data = error;
  }

  return { isError, data };
};

module.exports = {
  createUser,
};
