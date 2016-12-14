import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
  let errors = {};
  console.log(data);

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if(Validator.isEmpty(data.username)) {
    errors.username = 'Name is required';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if(Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'PasswordConfirmation is required';
  }

  if(!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Password must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res) => {
  console.log(req.body);
  // setTimeout(() => {
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
      res.status(400).json(errors);
    }
  // }, 5000);
});

export default router;
