import express from 'express';
import authenticate from '../middlewares/authenticate';

import Event from '../models/event';

let router = express.Router();

router.post('/', authenticate, (req, res) => {
  // res.status(201).json({ success: true });
  // res.status(201).json({ user: req.currentUser });
  let user_id = req.currentUser.attributes.id;
  const { event } = req.body;
  Event.forge({
    event, user_id
  }, { hasTimestamps: true }).save()
    .then(event => res.json({ success:true }))
    .catch(err => res.status(500).json({ error: err }));
});

export default router;
