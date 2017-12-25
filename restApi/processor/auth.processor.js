(function () {
    /*password encryption logic goes here*/
    const crypto = require('crypto');
    const web_config = require('../config/config');
    const PRIVATE_KEY = web_config.token.privateKey;
    const ALGORITHM = web_config.token.algorithm;


    const encrypt = (password) => {
        let cipher = crypto.createCipher(ALGORITHM, PRIVATE_KEY);
        let crypted = cipher.update(password.toString(), 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    };

    const decrypt = (password) => {
        var decipher = crypto.createDecipher(ALGORITHM, PRIVATE_KEY);
        var dec = decipher.update(password, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    };

    module.exports = {
        encrypt: encrypt,
        decrypt: decrypt
    }
})();