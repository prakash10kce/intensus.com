(function () {
    const tMonialRouterModule = () => {
        const express = require('express');
        const tMonialRoutes = express.Router();
        const testiMonialModel = require('../models/testimonial.model').tMonialModel;
        const url = require('../controller/common/url.utility')();
        const testiMonialCtrl = require('../controller/method.controller.js')(testiMonialModel);
        const commonService  = require('../controller/common/middleware')(testiMonialModel);


        tMonialRoutes.route('/tms')
            .get(testiMonialCtrl.loadData)
            .post(testiMonialCtrl.createNode);

        tMonialRoutes.use('/tms/:id',commonService.getById);

        tMonialRoutes.route('/tms/:id')
            .get(testiMonialCtrl.getNode)
            .put(testiMonialCtrl.updateNode)
            .delete(testiMonialCtrl.deleteNode);
        /*returning product and service routes*/
        return tMonialRoutes;

    };
    module.exports = tMonialRouterModule();
})();