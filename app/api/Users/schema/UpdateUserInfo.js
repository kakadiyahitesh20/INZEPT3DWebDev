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
		name: Joi.string().min(3).max(60),
		email : Joi.string().min(3).max(60),
		status : Joi.string().min(3).max(60),
		dob: Joi.date()
	}

};

