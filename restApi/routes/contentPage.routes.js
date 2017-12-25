/**
 * Created by kashetws on 03/09/17.
 */
(function () {
    const eventRoutes = function () {
        const express = require('express');
        const contentRoute = express.Router();
        const contentModel = require('../models/contentPage.model');
        const eventCtrl = require('../controller/method.controller.js')(contentModel);
        const commonService  = require('../controller/common/middleware')(contentModel);

        contentRoute.route('/contentPages')
            .get(eventCtrl.loadData)
            .post(eventCtrl.createNode);

        contentRoute.use('/contentPages/:id',commonService.getById);

        contentRoute.route('/contentPages/:id')
            .get(eventCtrl.getNode)
            .put(eventCtrl.updateNode)
            .delete(eventCtrl.deleteNode);
        /*returning product and service routes*/
        return contentRoute;
    };

    module.exports = eventRoutes();
})();