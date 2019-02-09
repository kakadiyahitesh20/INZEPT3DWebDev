"use strict";

const HapiArch = require("hapi-arch");
var Hapi = require('hapi');
module.exports = HapiArch()

  // do whatever you need here with the server object.
  .then(server => {
    return server;
  })

  // on server fail to load.
  .catch(error => {
    process.exit(1);
  });

var server = new Hapi.Server();
server.connection({
    host:'localhost',
    port: 8098
});
