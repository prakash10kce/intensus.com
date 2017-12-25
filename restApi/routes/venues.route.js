(function () {
    const eventRoutes = function () {
        const express = require('express');
        const venueRoute = express.Router();
        const venueModel = require('../models/venues.model').venueModel;
        const methodCtrl = require('../controller/method.controller.js')(venueModel);
        const commonService  = require('../controller/common/middleware')(venueModel);
        const fileHandler = require('../controller/fileUpload.controller');
        const uploadFile = fileHandler.uploadFile('/assets/venues');
        venueRoute.route('/venues')
            .get(methodCtrl.loadData)
            .post(methodCtrl.createNode);

        venueRoute.post('/venues/upload', uploadFile.array("uploads[]",1), function (req, res) {
            res.send(req.files);
        });

        venueRoute.use('/venues/:id',commonService.getById);

        venueRoute.route('/venues/:id')
            .get(methodCtrl.getNode)
            .put(methodCtrl.updateNode)
            .delete(methodCtrl.deleteNode);
        /*returning product and service routes*/
        return venueRoute;
    };

    module.exports = eventRoutes();
})();