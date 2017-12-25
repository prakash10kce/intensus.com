/*data of the vendors / promotors goes here*/

(function () {
    const mongoose = require('mongoose');
    const dbInstance = require('../config/db');
    const autoIncrement = require('mongoose-auto-increment');
    const uniqueValidator = require('mongoose-unique-validator');
    const Schema = mongoose.Schema;

    /*Initialize Auto Increament for db*/
    autoIncrement.initialize(dbInstance);

    const userProfileModel = new Schema({
        email: {
            type: String,
            unique: true
        },
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        phone: {
            type: String
        },
        about_me: {
            type: String
        },
        address: {
            type: String
        },
        city: {
            type: String
        },
        country: {
            type: String
        },
        zip_code: {
            type: String
        },
        designation: {
            type: String
        },
        profile_path: {
            type: String
        },
        user_id: {
            type: Number,
            unique: true
        }
    });

    userProfileModel.plugin(autoIncrement.plugin, {
        model: 'user',
        field: 'user_id',
        startAt: 10000,
        incrementBy: 1
    });
    userProfileModel.plugin(uniqueValidator);

    var userProfile = mongoose.model('userprofiles', userProfileModel);

    module.exports = {
        userProfileModel : userProfile
    }
})();

