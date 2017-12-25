/**
 * Created by kashetws on 03/09/17.
 */
(function () {
    const eventRoutes = function () {
        const express = require('express');
        const aboutUs = express.Router();
        const ownersModel = require('../models/aboutus.model');
        const eventCtrl = require('../controller/method.controller.js')(ownersModel);
        const commonService  = require('../controller/common/middleware')(ownersModel);

        aboutUs.route('/owners')
            .get(eventCtrl.loadData)
            .post(eventCtrl.createNode);

        const fileHandler = require('../controller/fileUpload.controller');
        const uploadFile = fileHandler.uploadFile('/assets/owners');

        aboutUs.post('/owners/upload', uploadFile.array("uploads[]",1), function (req, res) {
            res.send(req.files);
        });

        aboutUs.use('/owners/:id',commonService.getById);

        aboutUs.route('/owners/:id')
            .get(eventCtrl.getNode)
            .put(eventCtrl.updateNode)
            .delete(eventCtrl.deleteNode);
        /*returning product and service routes*/
        return aboutUs;
    };

    module.exports = eventRoutes();
})();