"use strict";
const nodemailer = require("nodemailer");
const SGmail = require('@sendgrid/mail')



module.exports = function (server, options, services) {

    const {UserService} = services;

	/* Helpers */

    let errorHandling = _.curry(
        function errorHandling(reply, err) {
            server.log("error", err);
            reply(err);
        }
    );

    function sendRegisterEmail(userInfo,callback) {

        let email = userInfo.email;
        var emailString = '<p>We sent you an email with a link to complete your registration. '+email+'</p><a href="http://localhost:8080/registerConfirmation?email='+email+'">Click here to confirm your account  </a>';
        var mail = {
            from: '"Hitesh Kakadiya" <kakadiyahitesh20@gmail.om>',
            to: userInfo.email,
            subject: "Registration Confirmation Link",
            text: emailString,
            html: emailString
        }

        SGmail.send(mail, function(error, response){
            if(error){
                console.log(error);
            }else{
                console.log("Message sent: " + response.message);
            }
        });
    }

    return {

        /**
         * Create New user
         *
         * @param {Object} request - The request of the function.
         * @param {Object} request.params - The data required and submitted to the function.
         * @param {function} reply - The reply function.
         */

        createNewUser: function (request, reply) {
            console.log("UserCtrl --> createNewUser");
            UserService.createNewUser(request.payload)
                .then(createUser => {
                //sendRegisterEmail(createUser);
                reply(createUser);
             })
                .catch(errorHandling(reply));
        },

        /**
         * Check Login credentials
         *
         * @param {Object} request - The request of the function.
         * @param {Object} request.params - The data required and submitted to the function.
         * @param {Email} request.params - The email of the user.
         * @param {function} reply - The reply function.
         */

        usersLoginCheck: function (request, reply) {
            console.log("UserCtrl --> checkUserLogin");
            UserService.checkUserLogin(request.params.email,request.params.password)
                .then(checkLogin => {
                reply(checkLogin);
        })
        },

        /**
         * Update user inforamtion
         *
         * @param {Object} request - The request of the function.
         * @param {Object} request.payload - The data required and submitted to the function.
         * @param {Email} request.payload - The payload of the user.
         * @param {function} reply - The reply function.
         */

        updateUserInfo: function (request, reply) {
            console.log("UserCtrl --> updateUserInfo");
            console.log(request.payload);
            UserService.updateUserInfo(request.payload)
                .then(updatedUser => {
                reply(updatedUser);
        })
        },
        getUsersList: function (request, reply) {
            console.log("UserCtrl --> getUsersList");
            // Call the user service to get a specific userlist
            UserService.getUserList()
                .then(reply)
                .catch(errorHandling(reply));
        },

    };

};
