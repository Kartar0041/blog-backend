import joi from 'joi';

// Validate user schema
const userSchema = joi.object({
  user_name: joi.string().min(3).max(30).required(),
  firstName: joi.string().min(0).max(10).optional(),
  lastName: joi.string().min(0).max(10).optional(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  isAdmin: joi.boolean().required()
})

// Validate user schema signin
const userSchemaSignin = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required()
})


// Validate Schema
const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body)
  if (error) {
    res.status(400).json({ message: error.details[0].message })
  } else {
    next();
  }
};

// Validate Schema Signin
const validateUserSignIn = (req, res, next) => {
  const { error } = userSchemaSignin.validate(req.body)
  if (error) {
    res.status(400).json({ message: error.details[0].message })
  } else {
    next();
  }
};

export {
  validateUser,
  validateUserSignIn
}

