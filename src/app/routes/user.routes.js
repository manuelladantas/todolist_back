const express = require('express');
const userService = require('../services/user.service');
const authService = require('../services/auth.service')

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const user = req.body
    const newUser = await userService.create(user);
    const result = await authService.login(newUser);
    res.send(result);
  } catch (error) {
    res.status(400).send({error: 'Error to create a user'})
  } 
});

module.exports = router;