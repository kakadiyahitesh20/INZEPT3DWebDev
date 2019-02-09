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
        headers: ["Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,cache-control,pragma,'X-Auth-Token', 'X-CSRF-TOKEN'"],
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
				validate: CreateUser
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
	];
};
