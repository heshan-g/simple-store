const authService = require('../services/auth.service');
const handleError = require('../utils/handleError');

const register = async (req, res) => {
  let responseObject = {
    success: false,
    message: '',
    response: {},
  };
  let result;

  const { name = null, email = null, password = null } = req.body;

  // Create user
  try {
    result = await authService.createUser({ name, email, password });

    // Check for errors from the service
    if (result.isError) {
      handleError(result.data);

      responseObject = {
        success: false,
        message: 'User was not created due to an error in the request',
        response: { error: result.data, request: req.body },
      };

      return res.status(400).json(responseObject);
    }
  } catch (error) {
    handleError(error);

    responseObject = {
      success: false,
      message: 'User was not created due to a server error',
      response: { error, request: req.body },
    };
  }

  // Successful response
  responseObject = {
    success: true,
    message: 'User created successfully',
    response: { result: result.data },
  };

  res.status(200).json(responseObject);
};

module.exports = {
  register,
};
