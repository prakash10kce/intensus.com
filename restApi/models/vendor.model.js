/*data of the vendors / promotors goes here*/

(function () {
    var mongoose = require('mongoose');
    const db = require('../config/db');
    const autoIncrement = require('mongoose-auto-increment');
    const uniqueValidator = require('mongoose-unique-validator');
    const Schema = mongoose.Schema;

    autoIncrement.initialize(db);


    var personModel = new Schema({
        name: {
            type: String
        },
        phone: {
            type: String
        },
        email: {
            type: String
        }
    });

    var vendorModel = new Schema({
        company_id: {
            type: String,
            unique: true
        },
        vendorLogoPath : {
            type: String
        },
        companyName: {
            type: String
        },
        physicalAddress:{
            type: String
        },
        officeAddress: {
            type: String
        },
        contact: [personModel],
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    vendorModel.plugin(autoIncrement.plugin, {
        model: 'vendor',
        field: 'company_id',
        startAt: 1000,
        incrementBy: 1
    });
    vendorModel.plugin(uniqueValidator);

    var vendorSchema = mongoose.model('vendorCollections', vendorModel);

    module.exports = {
        vendorModel : vendorSchema
    }
})();

