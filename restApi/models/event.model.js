(function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var youtubeModel = new Schema({
        videoTitle : {
            type: String
        },
        videoLink : {
            type: String
        }
    });

    var details = new Schema({
        title: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        location: {
            type: String
        },
        overview: {
            type: String
        },
        description: {
            type: String
        },
        tags: {
            type: String
        },
        ticketLink: {
            type: String,
            unique: true
        }
    });

    var imageModel = new Schema({
        largeImage: {
            type: String
        },
        mediumImage: {
            type: String
        },
        thumbnail: {
            type: String
        }
    });

    var eventGalleryModel = new Schema({
        fbPreEventAlbumLink: {
            type: String
        },
        fbShowAlbumLink: {
            type: String
        },
        fbAlbumLink: {
            type: String
        }
    });


    var socialModel = new Schema({
        artistInstagram : {
            type: String
        },
        artistFacebook : {
            type: String
        },
        artistTwitter : {
            type: String
        }
    });


    var bioModel = new Schema({
        artistType: {
            type: String,
            required: true
        },
        screenName: {
            type: String,
            required: true
        },
        social: socialModel
    });


    var artistsModel = new Schema({
        _id : String,
        artistId : {
            type: String
        },
        bio : bioModel,
        profilePath : {
            type: String
        },
        selfLink : {
            type: String
        }
    });

    var vendorModel = new Schema({
        companyId: {
            type: String,
            required: true
        },
        vendorType : {
            type: String
        },
        vendorLogoPath : {
            type: String
        },
        companyName: {
            type: String
        }
    });

    var vendorCategory = new Schema({
        platinumSponsors: [vendorModel],
        sponsors: [vendorModel],
        vendors: [vendorModel],
    });

    var venueModel = new Schema({
        venueName : {
            type: String
        },
        venueLogo: {
            type: String
        },
        venuePhone: {
            type: String
        },
        physicalAddress: {
            type: String
        }

    });

    var eventModel = new Schema({
        eventId: {
            type: String,
            required: true
        },
        details: details,
        youtube: [youtubeModel],
        poster : imageModel,
        eventPics : eventGalleryModel,
        artists: [artistsModel],
        vendors: vendorCategory,
        venue: venueModel,
        links: {
            self: {
                type: String
            }
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    module.exports = mongoose.model('eventCollections', eventModel);
})();

