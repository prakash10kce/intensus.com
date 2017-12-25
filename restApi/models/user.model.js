/*data of the vendors / promotors goes here*/

(function () {
    let mongoose = require('mongoose');
    let Schema = mongoose.Schema;

    let userModel = new Schema({
        email: {
            type: String
        },
        password: {
            type: String
        }
    });

    module.exports = mongoose.model('authorsCollections', userModel);
})();

