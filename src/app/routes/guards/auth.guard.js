const cryptoService = require('../../services/crypto.service');

module.exports = {
    authGuard: async (req, res, next) => {
        const token = req.headers["authorization"];
        if (!token) {
            res.status(401).json({ message: "Token doesnt exist !" });
        } else {
            const result = cryptoService.decrypt(token);

            if (!result) {
                res.status(401).json({ message: "Invalid Token" });
            }

            req.user = result;
            next();
        }
    }
}