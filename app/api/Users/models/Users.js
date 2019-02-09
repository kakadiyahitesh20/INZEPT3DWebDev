/**
 * mongoose module to track users details
 */
'use strict';

const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    name: String,
    email: String,
    dob: {
        type: Date
    },
    status : String,
	password: String
}, {
	// add "created at" & "updated at" time stamps.
	timestamps: true
});
