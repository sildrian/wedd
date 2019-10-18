'use strict';

var User = require('../models/UserModel.js');
var response = require('../../config/rs');
const basicauth = require('../../config/checkBasicAuth')
const objBasicAuth  = new basicauth();
var bcrypt = require('bcryptjs')

const log = require('../../tools/logger');
const helpers = require('../../tools/helpers');

const dotenv = require('dotenv');
dotenv.config();
// console.log(`Your port is ${process.env.PORT_TSEL}`);
const fs = require('fs');
var rp = require('request-promise');

const timeout = 3000;

class AuthController {

    // index(req, res) {
    //     // console.log('this is send iso')
    //     // Connect to remote server
    //     log.info('***** connecting ******');
    //     makeConnection();

    //     //all method needed
    //     function makeConnection() {
    //         client.connect(host_port, host_address,function(){
    //           connectEventHandler()
    //         });
    //     }
    // }

    login(req, res){
        if(req.header.authorization != ''){
            let authorize = objBasicAuth.index(req,res)
            authorize.then(function(result) {
                if(result == 'success'){
                    console.log(req)
                    // User.checkUser(function(req) {
                    //     // console.log('controller')
                    //     if (err){
                    //         res.send(err);
                    //         // console.error(err);
                    //         response.fail(err, res)
                    //         // if (e.message === "Bad request") {
                    //             res.status(400).json({error: err});
                    //             res.end();
                    //         // }
                    //     }   
                    //     // console.log('res', user);
                    //     // res.send(task);//used
                    //     response.ok(user, res)
                    // });
                }else{
                    response.fail(result, res)
                }
            })
            .catch(function(){
                response.fail("Something went wrong...", res)
            });
        }
    }

    getUsers(req, res){
        if(req.header.authorization != ''){
            let authorize = objBasicAuth.index(req,res)
            authorize.then(function(result) {
                if(result == 'success'){
                    User.getAllUser(function(err, user) {
                        // console.log('controller')
                        if (err){
                            res.send(err);
                            // console.error(err);
                            response.fail(err, res)
                            // if (e.message === "Bad request") {
                                res.status(400).json({error: err});
                                res.end();
                            // }
                        }   
                        // console.log('res', user);
                        // res.send(task);//used
                        response.ok(user, res)
                    });
                }else{
                    response.fail(result, res)
                }
            })
            .catch(function(){
                response.fail("Something went wrong...", res)
            });
        }
    }
}
module.exports = AuthController