(function () {
    const authRouterModule = () => {
        const express = require('express');
        const authRoutes = express.Router();
        const authModel = require('../models/auth.model').AuthModel;
        const authController = require('../controller/auth.controller')(authModel);

        authRoutes.post('/register', authController.registerUser);
        authRoutes.post('/authenticate', authController.authenticateUser);
        return authRoutes;
    };
    module.exports = authRouterModule();
})();