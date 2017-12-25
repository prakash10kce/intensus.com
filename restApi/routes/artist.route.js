(function () {
    const eventRoutes = function () {
        const express = require('express');
        const artistRoute = express.Router();
        const artistModel = require('../models/artist.model').artistModel;
        const url = require('../controller/common/url.utility')();
        const eventCtrl = require('../controller/method.controller.js')(artistModel);
        const commonService  = require('../controller/common/middleware')(artistModel);
        const fileHandler = require('../controller/fileUpload.controller');
        const uploadFile = fileHandler.uploadFile('/assets/artists');

        artistRoute.route('/artist')
            .get(eventCtrl.loadData)
            .post(eventCtrl.createNode);

        artistRoute.post('/artist/upload', uploadFile.array("uploads[]",1), function (req, res) {
            res.send(req.files);
        });

        artistRoute.use('/artist/:id',commonService.getById);

        artistRoute.route('/artist/:id')
            .get(eventCtrl.getNode)
            .put(eventCtrl.updateNode)
            .delete(eventCtrl.deleteNode);
        /*returning product and service routes*/
        return artistRoute;
    };

    module.exports = eventRoutes();
})();