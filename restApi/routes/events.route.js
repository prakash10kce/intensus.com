(function () {
    var eventRoutes = function () {
        const express = require('express');
        const eventRoute = express.Router();
        const eventModel = require('../models/event.model');
        const eventCtrl = require('../controller/method.controller')(eventModel);
        const commonService  = require('../controller/common/middleware')(eventModel);

        eventRoute.route('/events')
            .get(eventCtrl.loadData)
            .post(eventCtrl.createNode);

        eventRoute.use('/events/:id',commonService.getById);

        eventRoute.route('/events/:id')
            .get(eventCtrl.getNode)
            .put(eventCtrl.updateNode)
            .delete(eventCtrl.deleteNode);
        /*returning product and service routes*/
        return eventRoute;
    };

    module.exports = eventRoutes();
})();
