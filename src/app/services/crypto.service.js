const crypto = require('crypto');

const config = {
    algorithm: 'aes-192-cbc',
    password: '1iA8lMg+jM?vd#l@vc%.D@/b.[i~>B'
}
const key = crypto.scryptSync(config.password, 'salt', 24);
const iv = Buffer.alloc(16, 0);


module.exports = {
    encrypt: (obj) => {
        try {
            let string = '';
            const cipher = crypto.createCipheriv(config.algorithm, key, iv);

            if (typeof obj === 'object') {
                string = JSON.stringify(obj);
            } else if (typeof obj === 'string') {
                string = obj;
            }

            let encrypted = cipher.update(string, 'utf8', 'hex');

            encrypted += cipher.final('hex');

            return encrypted;
        } catch (error) {
            throw error;
        }
    },

    decrypt: (encrypted, isString) => {
        try {
            const decipher = crypto.createDecipheriv(config.algorithm, key, iv);

            let decrypted = decipher.update(encrypted, 'hex', 'utf8');
            let obj = null;

            decrypted += decipher.final('utf8');

            if (isString) return decrypted;

            obj = JSON.parse(decrypted);

            return obj;
        } catch (error) {
            return null;
        }
    }
}