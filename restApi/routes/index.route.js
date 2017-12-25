/**
 * Created by kashetws on 03/09/17.
 */

(function () {
    module.exports = function (app) {
        /*loading all the routes*/
        const authRoutingModule = require('../routes/auth.route');
        const userProfileRoutingModule = require('../routes/user.profile.route');
        const tMonialRoutingModule = require('../routes/testimonial.route');
        const teamMemberRoutingModule = require('../routes/team.member.route');
        const branchRoutingModule = require('../routes/branch.route');
        const artistRoutes = require('../routes/artist.route');
        const vendorRoutes = require('../routes/vendor.route');
        const venuesRoutes = require('../routes/venues.route');
        const ownersRoutes = require('../routes/aboutus.routes');
        const contentPageRoutes = require('../routes/contentPage.routes');
        const eventsRoutes = require('../routes/events.route');
        const fileUploadRoutes = require('../routes/aws.upload.routes');

        /*Authentication routes for the api*/
        app.get('/auth',function(req, res){
            res.status(200).send("Authentication is working perfect :)");
        });

        /*assing all routes to the api*/
        app.use('/auth', authRoutingModule);

        app.use('/api', userProfileRoutingModule);
        app.use('/api', tMonialRoutingModule);
        app.use('/api', branchRoutingModule);
        app.use('/api', teamMemberRoutingModule);
        app.use('/api', artistRoutes);
        app.use('/api', vendorRoutes);
        app.use('/api', venuesRoutes);
        app.use('/api', ownersRoutes);
        app.use('/api', contentPageRoutes);
        app.use('/api', eventsRoutes);
        app.use('/api', fileUploadRoutes);

        app.get('/api',function(req, res){
            res.send("node rest api is under development");
        });
    };
})();