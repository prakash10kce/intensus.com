(function () {
    const userProfileRouterModule = () => {
        const express = require('express');
        const userProfileRoutes = express.Router();
        const userProfileModel = require('../models/user.profile.model').userProfileModel;
        const url = require('../controller/common/url.utility')();
        const eventCtrl = require('../controller/method.controller.js')(userProfileModel);
        const commonService  = require('../controller/common/middleware')(userProfileModel);
        const fileHandler = require('../controller/fileUpload.controller');
        const uploadFile = fileHandler.uploadFile('/assets/userProfiles');


        userProfileRoutes.route('/users')
            .get(eventCtrl.loadData)
            .post(eventCtrl.createNode);

        userProfileRoutes.post('/users/upload', uploadFile.array("uploads[]",1), function (req, res) {
            res.send(req.files);
        });

        userProfileRoutes.use('/users/:id',commonService.getById);

        userProfileRoutes.route('/users/:id')
            .get(eventCtrl.getNode)
            .put(eventCtrl.updateNode)
            .delete(eventCtrl.deleteNode);
        /*returning product and service routes*/
        return userProfileRoutes;

    };
    module.exports = userProfileRouterModule();
})();