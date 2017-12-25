/**
 * Created by kashetws on 03/09/17.
 */
module.exports = (function () {
        const multer = require("multer");
        const multerS3 = require('multer-storage-s3');
        const aws = require('aws-sdk');
        const config = require('../config/config');
        aws.config.update(config.aws);
        const s3 = new aws.S3();
        const bucketName = config.bucketInfo.bucketName;

        //Create bucket. Note: bucket name must be unique.
        //Requires only bucketName via post
        //check [http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#createBucket-property](http://) for more info
        const createBucket = function (req, res) {
            var item = req.body;
            var params = { Bucket: bucketName };
            s3.createBucket(params, function (err, data) {
                if (err) {
                    return res.send({ "error": err });
                }
                res.send({ data });
            });
        };

        //List all buckets owned by the authenticate sender of the request. Note: bucket name must be unique.
        //check http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#listBuckets-property for more info
        const listBuckets = function (req, res) {
            s3.listBuckets({}, function (err, data) {
                if (err) {
                    return res.send({ "error": err });
                }
                res.send({ data });
            });
        };

        //Delete bucket.
        //Require bucketName via delete
        //check http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteBucket-property for more info
        const deleteBucket = function (req, res) {
            var item = req.body;
            var params = { Bucket: bucketName };
            s3.deleteBucket(params, function (err, data) {
                if (err) {
                    return res.send({ "error": err });
                }
                res.send({ data });
            });
        };

        //Delete bucket cors configuration.
        // Requires bucketName via delete
        //check http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteBucketCors-property for more info
        const deleteBucketCors = function (req, res) {
            var item = req.body;
            var params = { Bucket: bucketName };
            s3.deleteBucketCors(params, function (err, data) {
                if (err) {
                    return res.send({ "error": err });
                }
                res.send({ data });
            });
        };

        //Retrieves objects from Amazon s3
        //check http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property to configure params properties
        //eg var params = {Bucket: 'bucketname', Key:'keyname'}
        const getObjects = function (req, res) {
            var item = req.body;
            var params = { Bucket: req.params.bucketName };
            s3.getObject(params, function (err, data) {
                if (err) {
                    return res.send({ "error": err });
                }
                res.send({ data });
            });
        };

        //Delete qn object
        //check http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObject-property for more info
        const deleteObject = function (req, res) {
            var item = req.body;
            var params = { Bucket: bucketName, Key: item.key };
            s3.deleteObjects(params, function (err, data) {
                if (err) {
                    return res.send({ "error": err });
                }
                res.send({ data });
            });
        };

        //cloud image uploader using multer-s3
        //Pass the bucket name to the bucketName param to upload the file to the bucket
        const uploadImage = function (req, res) {
            let  item = req.body;
            const upload = multer({
                storage: multerS3({
                    s3: s3,
                    bucket: bucketName,
                    metadata: function (req, file, cb) {
                        cb(null, { fieldName: file.fieldname });
                    },
                    key: function (req, file, cb) {
                        cb(null, Date.now().toString())
                    }
                })
            })
        };

        const uploadFile = function (path) {
            const upload = multer({
                storage: multerS3({
                    s3: s3,
                    bucket: bucketName + path,
                    key: function (req, file, cb) {
                        var newFileName = Date.now() + "-" + file.originalname;
                        cb(null, newFileName); //use Date.now() for unique file keys
                    }
                })
            });
            return upload;
        };
        return {
            uploadFile : uploadFile
        }

    })();

