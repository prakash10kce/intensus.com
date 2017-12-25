(function () {
    const mongoose = require('mongoose');
    const db = require('../config/db');
    const autoIncrement = require('mongoose-auto-increment');
    const uniqueValidator = require('mongoose-unique-validator');
    const Schema = mongoose.Schema;

    autoIncrement.initialize(db);


    /*
    * @module : branch.model
    * @description : contains all the necessory data in the collection for the user authentication and role.
    * */

    var branchModel = new Schema({
        created_at: {
            type: Date,
            value: new Date()
        },
        company_name:{
            type: String,
            unique: true,
            required: true
        },
        company_link:{
            type: String,
        },
        company_logo:{
            type: String,
        },
        branch_id : {
            type: Number,
            unique: true
        }
    });

    branchModel.plugin(autoIncrement.plugin, {
        model: 'user',
        field: 'branch_id',
        startAt: 10000,
        incrementBy: 1
    });
    branchModel.plugin(uniqueValidator);


    var branches = mongoose.model('branchcollection', branchModel);

    module.exports = {
        branchModel : branches
    }

})();