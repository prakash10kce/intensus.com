(function () {
    const Mongoose = require('mongoose');
    const Config = require('./config');

    // Mongoose.connect(Config.database.local_url, { useMongoClient : true});
    Mongoose.connect(Config.database.url, { useMongoClient : true});

    const dbConnection = Mongoose.connection;

    dbConnection.on('error', console.error.bind(console, 'connection error'));

    dbConnection.once('open', function callback() {
        console.log("Connection with database succeeded..!");
    });

    module.exports = dbConnection;
})();