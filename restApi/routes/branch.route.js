(function () {
    const branchRoutingModule = () => {
        const express = require('express');
        const branchRoutes = express.Router();
        const branchModel = require('../models/branches.model').branchModel;
        const url = require('../controller/common/url.utility')();
        const eventCtrl = require('../controller/method.controller.js')(branchModel);
        const commonService  = require('../controller/common/middleware')(branchModel);
        const fileHandler = require('../controller/fileUpload.controller');
        const uploadFile = fileHandler.uploadFile('/assets/branch');


        branchRoutes.route('/branches')
            .get(eventCtrl.loadData)
            .post(eventCtrl.createNode);

        branchRoutes.post('/branches/upload', uploadFile.array("uploads[]",1), function (req, res) {
            res.send(req.files);
        });

        branchRoutes.use('/branches/:id',commonService.getById);

        branchRoutes.route('/branches/:id')
            .get(eventCtrl.getNode)
            .put(eventCtrl.updateNode)
            .delete(eventCtrl.deleteNode);
        /*returning product and service routes*/
        return branchRoutes;

    };
    module.exports = branchRoutingModule();
})();