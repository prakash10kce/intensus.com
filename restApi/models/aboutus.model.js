/**
 * Created by kashetws on 03/09/17.
 */
(function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var ownerModel = new Schema({
        ownerId: {
            type: String,
            required: true
        },
        ownerName: {
            type: String
        },
        aboutOwner:{
            type: String
        },
        facebookLink: {
            type: String
        },
        twitterLink: {
            type: String
        },
        profilePath: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    module.exports = mongoose.model('ownersCollections', ownerModel);
})();

