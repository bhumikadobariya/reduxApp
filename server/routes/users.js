import express from 'express';
import validateInput from '../shared/validations/signup';

let router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  // setTimeout(() => {
    const { errors, isValid } = validateInput(req.body);

    if (isValid) {
      res.json({ success : true});
    } else {
      res.status(400).json(errors);
    }
  // }, 5000);
});

export default router;
