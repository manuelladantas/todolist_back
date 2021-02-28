const express = require('express');
const authService = require('../services/auth.service')

const router = express.Router();

router.post('/signin', async (req, res) => {
    try {
        const user = await authService.validateUser(req.body.email, req.body.password);
        if (!user) {
            throw new Error("This user do not exist !");
        }

        const result = await authService.login(user);
        res.send(result);
    } catch (error) {
        res.status(400).send({error: 'Error to Login'});
    }
});

router.post('/logout', async (req, res) => {
    try {
        req.headers = null;
        req.user = null;
    } catch (error) {
        res.status(400).send({error: 'Error to Logout'});
    }
});

module.exports = router;
