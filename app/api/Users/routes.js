"use strict";

const cors = require('hapi-cors');
module.exports = function (server, options, controllers, components) {

    // USER CONTROLLER

	const {UserCtrl} = controllers;
	const {CreateUser} = components.schema;
	const {UpdateUserInfo} = components.schema;
    const {CheckUsersLogin} = components.schema;


     var corsHeaders = {
        origin: ["*"],
        headers: ['Accept', 'Content-Type', 'Authorization','pragma','cache-control','if-modified-since','api-key'],
        credentials: true
    };

	return [
		{
			method: "POST",
			path: "/createNewUser",
			config:
			{
				handler: UserCtrl.createNewUser,
				description: "Create a new User in the DB",
				tags: ["api"],
				validate: CreateUser,
                cors : corsHeaders
			}
    	},
        {
            method: "GET",
            path: "/checkUserLogin/{email}/{password}",
            config:
                {
                    handler: UserCtrl.usersLoginCheck,
                    description: "Check user login in DB",
                    tags: ["api"],
                    validate: CheckUsersLogin
                }
        },
        {
            method: "POST",
            path: "/updateUserInfo",
            config:
                {
                    handler: UserCtrl.updateUserInfo,
                    description: "Update trip info in the DB",
                    tags: ["api"],
                    validate: UpdateUserInfo
                }
        },
        {
            method: "GET",
            path: "/getUsersList",
            config:
                {
                    handler: UserCtrl.getUsersList,
                    description: "Get users list from DB",
                    tags: ["api"],

                }
        },
	];
};
