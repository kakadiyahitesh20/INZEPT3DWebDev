"use strict";

const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {

    headers: Joi.object({
        'api-key': Joi.string().required()
            .description("Api Key of the api")
    }).options({
        allowUnknown: true
    }),

    params: {
        email: Joi.string().description("The email address to check against the database").required(),
        password: Joi.string().description("The Password to check against the database").required()
    }

};

