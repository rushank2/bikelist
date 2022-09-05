const Joi = require('joi');

const validator = (schema) => (payload) =>
  schema.validateAsync(payload, { abortEarly: false });

const signupSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required().label('Name'),
  email: Joi.string().email().required().label('Email'),
  password: Joi.string().min(6).max(10).required().label('Password'),
  confirmPassword: Joi.any()
    .equal(Joi.ref('password'))
    .messages({ 'any.only': 'Passwords did not match' })
});

const authSchema = Joi.object({
  email: Joi.string().email().required().label('Email'),
  password: Joi.string().required().label('Password')
});

const bikeSchema = Joi.object({
  image: Joi.string().optional().allow(''),
  manufacturer: Joi.string().required().label('Manufacturer'),
  model: Joi.string().required().label('Model'),
  year: Joi.number().integer().label('Year')
});

module.exports = {
  validateUser: validator(signupSchema),
  validateAuth: validator(authSchema),
  validateBike: validator(bikeSchema)
};
