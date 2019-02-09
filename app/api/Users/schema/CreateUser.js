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

	payload: {
		name: Joi.string().min(3).max(60).required(),
		email: Joi.string().min(3).max(60).required(),
		status : Joi.string().min(3).max(60).required(),
		dob: Joi.date().required(),
		password: Joi.string().min(3).max(60).required()
	}

};

