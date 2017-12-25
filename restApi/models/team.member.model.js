/*data of the vendors / promotors goes here*/

(function () {
    const mongoose = require('mongoose');
    const dbInstance = require('../config/db');
    const autoIncrement = require('mongoose-auto-increment');
    const uniqueValidator = require('mongoose-unique-validator');
    const Schema = mongoose.Schema;

    /*Initialize Auto Increament for db*/
    autoIncrement.initialize(dbInstance);

    const teamMemberModel = new Schema({
        email: {
            type: String
        },
        name: {
            type: String
        },
        phone: {
            type: String
        },
        description: {
            type: String
        },
        fb_name: {
            type: String
        },
        twt_name: {
            type: String
        },
        insta_name: {
            type: String
        },
        designation: {
            type: String
        },
        profile_path: {
            type: String
        },
        member_id: {
            type: Number,
            unique: true
        }
    });

    teamMemberModel.plugin(autoIncrement.plugin, {
        model: 'user',
        field: 'member_id',
        startAt: 1000,
        incrementBy: 1
    });
    teamMemberModel.plugin(uniqueValidator);

    var teamMemberSchema = mongoose.model('teammembers', teamMemberModel);

    module.exports = {
        teamMemberModel : teamMemberSchema
    }
})();

