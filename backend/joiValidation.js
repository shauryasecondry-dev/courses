import Joi from 'joi';

export let signupSchema = Joi.object({
  username: Joi.string()
    .min(3)
    .max(9)
    .required()
    .messages({
      "string.empty": "Username is required",
      "string.min": "Username must be at least 3 characters",
      "string.max": "Username cannot exceed 9 characters",
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email address",
    }),
  password: Joi.string()
    .min(3)
    .max(12)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 3 characters",
      "string.max": "Password cannot exceed 12 characters",
    }),
});

export let loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email",
    }),
  password: Joi.string()
    .min(3)
    .max(12)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 3 characters",
      "string.max": "Password cannot exceed 12 characters",
    }),
});

export let courseSchema = Joi.object({
  title: Joi.string()
    .required()
    .messages({
      "string.empty": "Title is required",
    }),
  description: Joi.string()
    .required()
    .messages({
      "string.empty": "Description is required",
    }),
  price: Joi.number()
    .min(0) // Minimum value 0
    .required()
    .messages({
      "number.base": "Price must be a number",
      "number.min": "Price cannot be less than 0",
      "any.required": "Price is required",
    }),//image ke liye no schema
});
