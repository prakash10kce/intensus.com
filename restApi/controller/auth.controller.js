/*
* (function(){
* const module = ()=>{ return { }}
* module.exports = module;
* })();
*
* */

(function () {
    const authControllerModule = (model) => {
        /*import required dependencies*/
        const web_config = require('../config/config');
        const Jwt = require('jsonwebtoken');
        const PRIVATE_KEY = web_config.token.privateKey;
        const authProcessor = require('../processor/auth.processor');

        /*create or register new user*/
        const userRegistration = (req, res) => {
            console.log(req.body);
            req.body.user_password = authProcessor.encrypt(req.body.user_password);
            var bodyObject = req.body;
            // var userNode = new model(bodyObject);
            model.saveUser(bodyObject, (err, user) => {
                if(!err) {
                    res.status(200);
                    res.send({message: `user has created successfully with client_id : ${user.client_id}`});
                } else {
                    if(err.name == 'ValidationError'){
                        let error = {};
                        error.statusCode = 409;
                        error.message = err.message;
                        res.status(error.statusCode).send({message : error.message});
                    }
                    else {
                        let error = {};
                        error.statusCode = 500;
                        error.message = `Oh uh, something went wrong`;
                        res.status(error.statusCode).send(error.message);
                    }
                }
            });

        };

        /*Authenticate user based on the credential provided*/
        const userAuthentication = (req, res) => {
            var userName = req.body.user_name;
            var password = req.body.user_password;
            model.findUser({user_name: userName}, (err, user)=>{
                if(err){
                    return res.status(500).send(`Oh uh, something went wrong`);
                }
                else if (user === null) {
                    return res.status(422).send(`Email not recognised`);
                }
                else {
                    if(password === authProcessor.  decrypt(user.user_password)){
                        if(user.isVerified){
                            let message = `Your email address is not verified. please verify your email address to proceed`;
                            return res.status(401).send({message});
                        } else{
                            let payLoad = {
                                user_name : user.user_name,
                                id: user._id
                            };
                            let userName = user.user_name;
                            let token = Jwt.sign(payLoad, PRIVATE_KEY);
                            res.status(200).send({token, userName});
                        }
                    } else {
                        res.status(401).send({ Message : 'Username and password is not valid!'})
                    }

                }

            });
        };

        return {
            registerUser : userRegistration,
            authenticateUser: userAuthentication
        }
    };

    module.exports = authControllerModule;
})();