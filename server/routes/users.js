import express from 'express';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
// import Promise from 'bluebird';
import isEmpty from 'lodash/isEmpty';
import authenticate from '../middlewares/authenticate';

import User from '../models/user';

let router = express.Router();

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return User.query({
    where: { email: data.email },
    orWhere: { username: data.username }
  }).fetch().then(user => {
    if (user) {
      if (user.get('username') === data.username) {
        errors.username = 'There is user with such username';
      }
      if (user.get('email') === data.email) {
        errors.email = 'There is user with such email';
      }
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  })

  // return Promise.all([
  //   User.where({ email: data.email }).fetch().then(user => {
  //     if (user) {
  //       errors.email = 'There is user with such email';
  //     }
  //   }),
  //   User.where({ username: data.username }).fetch().then(user => {
  //     if (user) {
  //       errors.username = 'There is user with such username';
  //     }
  //   })
  // ]).then(() => {
  //   return {
  //     errors,
  //     isValid: isEmpty(errors)
  //   };
  // });
}

router.get('/:identifire', (req, res) => {
  User.query({
    select: [ 'email', 'username' ],
    where: { email: req.params.identifire },
    orWhere: { username: req.params.identifire }
  }).fetch().then(user => {
    res.json({ user });
  })
});

router.post('/', (req, res) => {
  // setTimeout(() => {
    // const { errors, isValid } = validateInput(req.body);
    validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
      if (isValid) {
      // res.json({ success : true});
        const { username, email, password } = req.body;
        const password_digest = bcrypt.hashSync(password, 10);

        User.forge({
          username, email, password_digest
        }, { hasTimestamps: true }).save()
          .then(user => res.json({ success:true }))
          .catch(err => res.status(500).json({ error: err }));

      } else {
        res.status(400).json(errors);
      }
    });
  // }, 5000);
});

router.post('/getUpdateProfile', authenticate, (req,res) => {
  console.log('getUpdateProfile', req.body);
  let user_id = req.currentUser.attributes.id;

  User.forge()
    .query(function (qb) {
      qb.where('id', '=', user_id);
    })
    .fetch()
    .then(function (user) {
      user
        .save(req.body)
        .then(function (results) {
          res.json({ results });
        }, function (err) {
          return err;
        });
    }, function (error) {
      if (error instanceof bookshelf.Model.NotFoundError) {
        // Handle the fact that user doesn't exist
        var err = new Error('User dose not exist.');
        return err;
      } else {
        // Handle generic database error
        return error;
      }
    });
});

export default router;
