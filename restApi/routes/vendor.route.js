(function () {
    const eventRoutes = function () {
        const express = require('express');
        const vendorRoute = express.Router();
        const vendorModel = require('../models/vendor.model').vendorModel;
        const methodCtrl = require('../controller/method.controller.js')(vendorModel);
        const commonService  = require('../controller/common/middleware')(vendorModel);
        const fileHandler = require('../controller/fileUpload.controller');
        const uploadFile = fileHandler.uploadFile('/assets/vendors');

        vendorRoute.route('/vendors')
            .get(methodCtrl.loadData)
            .post(methodCtrl.createNode);

        vendorRoute.post('/vendors/upload', uploadFile.array("uploads[]",1), function (req, res) {
            res.send(req.files);
        });

        vendorRoute.use('/vendors/:id',commonService.getById);

        vendorRoute.route('/vendors/:id')
            .get(methodCtrl.getNode)
            .put(methodCtrl.updateNode)
            .delete(methodCtrl.deleteNode);
        /*returning product and service routes*/
        return vendorRoute;
    };

    module.exports = eventRoutes();
})();