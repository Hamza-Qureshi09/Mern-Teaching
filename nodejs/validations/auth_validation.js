const Joi = require("joi");

// Validation for Register Controller
const RegisterValidation = ({ username, email, userPassword }) => {
  // fields validation
  const userFieldsSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
      .required()
      .error(
        new Error(
          "Password is not valid. It should contain at least one uppercase letter, one lowercase letter, and one number."
        )
      ),
  });

  const { error } = userFieldsSchema.validate({
    username,
    email,
    password: userPassword,
  });

  if (error) {
    return { status: false, error };
  } else {
    return { status: true, error: null };
  }
};

// Validation for Login Controller
const LoginValidation = ({ email, password }) => {
  // fields validation
  const userFieldsSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
      .required()
      .error(
        new Error(
          "Password is not valid. It should contain at least one uppercase letter, one lowercase letter, and one number."
        )
      ),
  });
  const { error } = userFieldsSchema.validate({ email, password });
  if (error) {
    return { status: false, error };
  } else {
    return { status: true, error: null };
  }
};

module.exports = { RegisterValidation, LoginValidation };
