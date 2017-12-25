module.exports = {
    server: {
        host: 'localhost',
        port: 3000
    },
    database: {
        url: "mongodb://admin:admin@ds115214.mlab.com:15214/intenseus",
        local_url: "mongodb://localhost/nodeRestApi"
    },
    token: {
        privateKey: '97LvDSm4XvjYOh9Y',
        algorithm: 'aes-256-ctr',
        tokenExpiry: 1 * 30 * 1000 * 60 //1 hour
    },
    aws: {
        secretAccessKey: "AuRba9iDAHfsB2usOVoDlBmvINkSiI56fSkJLiPK",
        accessKeyId: "AKIAJUF7LPL6755ZUONA",
        region: "us-east-1"
    },
    bucketInfo: {
        bucketName: 'web-amc-intenseus.com'
    }
};

