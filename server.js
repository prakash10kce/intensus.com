//NPM package
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const awsapi = require('./intense_rest/config/awsapi');

//Configuration of database
const config = require('./restApi/config/config');
const db = require('./restApi/config/db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    // Pass to next layer of middleware
    next();
});

app.use('/', express.static('dist'));

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname+ '/dist/index.html'));
});


/** load routes*/
require('./restApi/routes/index.route')(app);


app.get('**',function(req, res){
    res.sendFile(path.join(__dirname+ '/dist/index.html'));
});

const port = process.env.PORT || config.server.port;

app.listen(port, function(){
    console.log(`Gulp is running on port ${port}`);
});