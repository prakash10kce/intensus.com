/**
 * Created by kashetws on 17/09/17.
 */

(function () {

    module.exports = function () {

        var selfLink = function(req, nodeId){
            return 'http://' + req.headers.host + req.baseUrl + req.path + '/' + nodeId;
        };

        var queryProcessor = function (req) {
            var queryMapper = {
                'artist' : 'bio.screenName',
                'vendors' : 'companyName',
                'venues' : 'venueName'
            };
            if(!!req.query.name){
                let node = req.route.path.replace(/\//g, "");
                console.log("query processor", node);
                let searchParam = {};
                var searchKey = queryMapper[node];
                searchParam[searchKey] = {"$regex": req.query.name, $options: "i"};
                return searchParam;
            } if(!!req.query.email){
                let searchParam = {};
                searchParam['email'] = {"$regex": req.query.email, $options: "i"};
                return searchParam;
            }
            else {
                return {}
            }
        };

        var createProjection = function (req) {
            let projection = {};
            if(!!req.query.field){
                let fields = req.query.field.split(',');
                fields.forEach(function (currField) {
                    projection[currField] = 1;
                });
            }
            return projection
        };

        return {
            generateSelfLink : selfLink,
            processQuery : queryProcessor,
            getProjection : createProjection
        }
    }
})();
