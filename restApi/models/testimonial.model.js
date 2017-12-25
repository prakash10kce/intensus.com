(function () {
    const mongoose = require('mongoose');
    const db = require('../config/db');
    const autoIncrement = require('mongoose-auto-increment');
    const uniqueValidator = require('mongoose-unique-validator');
    const Schema = mongoose.Schema;

    autoIncrement.initialize(db);


    /*
    * @module : auth.model
    * @description : this holds the data or review for the testimonial content with source, name and description.
    * @tm_name : only string and unique + required
    * @tm_description : will hold the dscription value
    * @created_at : user Creation date
    * @modified_at : user modification date
    * @tm_source :this will hold the value of source from where this is getting collected
    * */

    var testiMonialModel = new Schema({
        tm_name : {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            value: new Date()
        },
        modified_at: {
            type: Date
        },
        tm_description: {
            type: String,
        },
        tm_source: {
            type: String
        },
        tm_id : {
            type: Number,
            unique: true
        }
    });

    testiMonialModel.plugin(autoIncrement.plugin, {
        model: 'user',
        field: 'tm_id',
        startAt: 10000,
        incrementBy: 1
    });
    testiMonialModel.plugin(uniqueValidator);
/*
    testiMonialModel.statics = {
        saveUser: function(requestData, callback) {
            this.create(requestData, callback);
        },

        findUserUpdate: function(query, user, callback) {
            this.findOneAndUpdate(query, user, callback);
        },

        updateUser: function(user, callback) {
            user.save(callback);
        },

        findUser: function(query, callback) {
            this.findOne(query, callback);
        },

        findUserByIdAndUserName: function(id, username, callback) {
            this.findOne({ username: username, _id: id }, callback);
        }
    };*/

    var testiMonial = mongoose.model('testimonialcollection', testiMonialModel);

    module.exports = {
        tMonialModel : testiMonial
    }

})();