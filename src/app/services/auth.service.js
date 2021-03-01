const userService = require('../services/user.service');
const bcrypt = require('bcrypt');
const cryptoService = require('../services/crypto.service');

module.exports = {
    validateUser: async (email, password) => {
        const user = await userService.findUserByEmail(email);
        let userInfo;
        if (user) {
            const isPasswordMatch = await comparePassword(password, user.password);
            if(isPasswordMatch) {
                userInfo = user;
            }
        }
        return userInfo;
    },

    login: async (user) => {
        const obj = {
            _id: user._id,
            email: user.email
        };
        return {
            user,
            token: cryptoService.encrypt(obj),
        }
    },
}

const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
}