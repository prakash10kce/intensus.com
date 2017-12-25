(function () {
    const teamMemberRoutingModule = () => {
        const express = require('express');
        const teamMemberRoutes = express.Router();
        const teamMemberModel = require('../models/team.member.model').teamMemberModel;
        const url = require('../controller/common/url.utility')();
        const teamMemberCtrl = require('../controller/method.controller.js')(teamMemberModel);
        const commonService  = require('../controller/common/middleware')(teamMemberModel);
        const fileHandler = require('../controller/fileUpload.controller');
        const uploadFile = fileHandler.uploadFile('/assets/teamProfile');

        teamMemberRoutes.route('/teams')
            .get(teamMemberCtrl.loadData)
            .post(teamMemberCtrl.createNode);

        teamMemberRoutes.post('/teams/upload', uploadFile.array("uploads[]",1), function (req, res) {
            res.send(req.files);
        });

        teamMemberRoutes.use('/teams/:id',commonService.getById);

        teamMemberRoutes.route('/teams/:id')
            .get(teamMemberCtrl.getNode)
            .put(teamMemberCtrl.updateNode)
            .delete(teamMemberCtrl.deleteNode);
        /*returning product and service routes*/
        return teamMemberRoutes;

    };
    module.exports = teamMemberRoutingModule();
})();