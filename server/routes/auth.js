import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import authenticate from '../middlewares/authenticate';

import User from '../models/user';

let router = express.Router();

router.post('/', (req, res) => {
  const { identifire, password } = req.body;

  User.query({
    where: { email: identifire },
    orWhere: { username: identifire }
  }).fetch().then(user => {
    if (user) {
      if (bcrypt.compareSync(password, user.get('password_digest'))) {
        const token = jwt.sign({
          id: user.get('id'),
          username: user.get('username')
        }, config.jwtSecret);
        res.json({ token });
      } else {
        res.status(401).json({ errors: { form: 'Invalid Credentials'} });
      }
    } else {
      res.status(401).json({ errors: { form: 'Invalid Credentials'} });
    }
  })

});

router.get('/updateprofile', authenticate, (req, res) => {
  console.log("ihihs");
  // res.status(201).json({ success: true });
  let user_id = req.currentUser.attributes.id;
  console.log(user_id);
  User.query({
    select: [ 'email', 'username' ],
    where: { id: user_id }
  }).fetch().then(user => {
    res.json({ user });
  })
});


export default router;

