(function () {
    const mongoose = require('mongoose');
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

    var venueModel = new Schema({
        venue_id: {
            type: String,
            required: true,
            unique: true
        },
        venueName: {
            type: String
        },
        venueLogoPath: {
            type: String
        },
        physicalAddress:{
            type: String
        },
        officeAddress: {
            type: String
        },
        venuePhone : {
            type: String
        },
        contact: [personModel],
        tags: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    venueModel.plugin(autoIncrement.plugin, {
        model: 'venueModel',
        field: 'venue_id',
        startAt: 1000,
        incrementBy: 1
    });
    venueModel.plugin(uniqueValidator);

    var venueModule = mongoose.model('venueCollections', venueModel);

    module.exports = {
        venueModel : venueModule
    }
})();

