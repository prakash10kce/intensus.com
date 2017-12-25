(function () {
    var mongoose = require('mongoose');
    const dbInstance = require('../config/db');
    const autoIncrement = require('mongoose-auto-increment');
    const uniqueValidator = require('mongoose-unique-validator');
    var Schema = mongoose.Schema;

    /*Initialize Auto Increament for db*/
    autoIncrement.initialize(dbInstance);

    var socialModel = new Schema({
        artistInstagram : {
            type: String
        },
        artistFacebook : {
            type: String
        },
        artistTwitter : {
            type: String
        },
        artistLinkedIn : {
            type: String
        }
    });

    var bioModel = new Schema({
        artistType: {
            type: String,
            required: true
        },
        realName: {
            type: String,
            required: true
        },
        screenName: {
            type: String,
            required: true
        },
        dob: {
            type: Date
        },
        height: {
            type: Number
        },
        eyeColor: {
            type: String
        },
        birthPlace: {
            type: String
        },
        profession: {
            type: String
        },
        school: {
            type: String
        },
        college: {
            type: String
        },
        university: {
            type: String
        },
        social: socialModel
    });

    var personalModel = new Schema({
        fatherName: {
            type: String
        },
        motherName: {
            type: String
        },
        siblings: {
            type: String
        },
        spouse: {
            type: String
        },
        children: {
            type: String
        }
    });

    var careerModel = new Schema({
        workHistory : {
            type: String
        },
        description : {
            type: String
        },
        award : {
            type: String
        }
    });

    var gossipModel = new Schema({
        money: {
            type: String
        },
        salaryPerGig: {
            type: String
        },
        facts: {
            type: String
        },
        otherLinks: {
            type: String
        },
        tags: {
            type: String
        }
    });

    var artistModel = new Schema({
        artist_id: {
            type: Number,
            unique: true
        },
        profilePath : {
           type: String
        },
        bio: bioModel,
        personalInfo: personalModel,
        career: careerModel,
        gossipGraph: gossipModel,
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    artistModel.plugin(autoIncrement.plugin, {
        model: 'user',
        field: 'artist_id',
        startAt: 1000,
        incrementBy: 1
    });
    artistModel.plugin(uniqueValidator);

    var artistSchema = mongoose.model('artistscollection', artistModel);

    module.exports = {
        artistModel: artistSchema
    }
})();

