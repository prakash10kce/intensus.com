(function () {
    const mongoose = require('mongoose');
    const db = require('../config/db');
    const autoIncrement = require('mongoose-auto-increment');
    const uniqueValidator = require('mongoose-unique-validator');
    const Schema = mongoose.Schema;

    autoIncrement.initialize(db);


    /*
    * @module : auth.model
    * @description : contains all the necessory data in the collection for the user authentication and role.
    * @user_name : only string and unique + required
    * @user_password : only string and unique + required
    * @created_at : user Creation date
    * @modified_at : user modification date
    * @role : this defines role of user like admin / master / user
    * */

    var authModel = new Schema({
        user_password : {
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
        /*Contained valid user email, it's unique and should required & indexed*/
        user_name:{
            type: String,
            unique: true,
            required: true
        },
        role: {
            type: String,
            default: 'user'
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        client_id : {
            type: Number,
            unique: true
        }
    });

    authModel.plugin(autoIncrement.plugin, {
        model: 'user',
        field: 'client_id',
        startAt: 10000,
        incrementBy: 1
    });
    authModel.plugin(uniqueValidator);

    authModel.statics = {
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
    };

    var auth = mongoose.model('authCollections', authModel);

    module.exports = {
        AuthModel : auth
    }

})();