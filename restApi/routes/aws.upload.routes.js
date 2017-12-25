/**
 * Created by kashetws on 03/09/17.
 */
(function () {
    const eventRoutes = function () {
        const express = require('express');
        const fileRoute = express.Router();
        const fileHandler = require('../controller/fileUpload.controller');
        var uploadFile;
        var path;

        fileRoute.use('/upload',function (req, res, next) {
                path = "/assets/" + req.query.path.toString();
                next();
        });

        uploadFile = fileHandler.uploadFile(path);

        fileRoute.post('/upload', uploadFile.array("uploads[]",1), function (req, res) {
            res.send(req.files);
        });

        fileRoute.get('/upload', function (req, res) {
            res.send({status: 200, statusText:"upload route is on"})
        });

        return fileRoute;
    };

    module.exports = eventRoutes();
})();