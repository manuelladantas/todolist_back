const cryptoService = require('../../services/crypto.service');

module.exports = {
    authGuard: async (req, res, next) => {
        const hash = req.headers["authorization"];
        const [identifier, token] = hash.split(" ");
        if (identifier === 'Bearer') {
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
        } else {
            res.status(401).json({ message: "Token doesnt exist !" });
        }
    }
}