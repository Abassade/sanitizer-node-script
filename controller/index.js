const fs = require ('fs');
const ValueResponse = require('./utils');

module.exports = {
   
    getBaseUrl: (req, res)=>{
        res.json({
            error: false,
            statusCode:200,
            message: 'Welcome to sanitizer api'
        });

    },
    getSanitizer: (req, res)=>{
        const phoneParams = req.query.phoneNumber;
        const region = req.query.region;
        const value_me = new ValueResponse(phoneParams, region)
        .value()
        res.json({
            error: false,
            statusCode:200,
            message: value_me
        });
    },
    uploadFileToSanitize: (req, res)=>{
        res.json({
            error: false,
            statusCode:200,
            message: 'Welcome to sanitizer api'
        });
    },
    doSomethingFunny: (req, res)=>{
        res.json({
            error: false,
            statusCode:200,
            message: 'Welcome to sanitizer api'
        });
    }
}