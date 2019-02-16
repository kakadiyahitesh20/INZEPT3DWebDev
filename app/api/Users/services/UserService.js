"use strict";

//const co = require("co");


module.exports = function (server, options, components) {

	const {
		Users
	} = components.models;



    /*  ---------------------------------------------------------------
            Create New User
            Params: userInfo - the user to create
			Return: successful user creation
			Effects: None;
        ---------------------------------------------------------------*/

	function createNewUser(usersInfo) {
		console.log("createNewUser");
		console.log(usersInfo);
		return Users.create(usersInfo);
	}

    /*  ---------------------------------------------------------------
           Check User credentials
           Params: Passed email and password
           Return: User details in JSON
           Effects: None;
       ---------------------------------------------------------------*/

    function checkUserLogin(email,password) {
        console.log("Start checkUserLogin ---->");
        console.log(email);
        console.log(password);
        return Users.find({$and:[{email : email,password : password}]});
    }



    /*  ---------------------------------------------------------------
       Update user info
       Params: userInfo - the user to create
       Return: successful user update
       Effects: None;
   ---------------------------------------------------------------*/

    function updateUserInfo(updateInfo) {
        console.log("updateInfo");
        console.log(updateInfo);
        return Users.findOneAndUpdate({email:updateInfo.email}, {status : 'Active'});
    }

    /*  ---------------------------------------------------------------
               Get User List
               Params: None
               Return: User list in JSON
               Effects: None;
           ---------------------------------------------------------------*/

    function getUserList() {
        console.log("Start getUserList ---->");
        return Users.find();
    }



    return {
        createNewUser,
		checkUserLogin,
        updateUserInfo,
        getUserList
	};

};
