/**
 * Created by kashetws on 03/09/17.
 */
(function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var contentModel = new Schema({
        contentId: {
            type: String,
            required: true
        },
        title: {
            type: String
        },
        content: {
            type: String
        },
        pageTitle:{
            type: String
        },
        metaKeywords: {
            type: String
        },
        metaDescription: {
            type: String
        },
        status: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    module.exports = mongoose.model('contentPageCollections', contentModel);
})();

