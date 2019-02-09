"use strict";

const fs = require("fs");
const path = require("path");
const certFile = [fs.readFileSync(path.join(__dirname, '..', 'config/composeCert.crt'))];

module.exports = {
    url: "mongodb://admin:q2IpAZEJ6gRiP9zv@SG-usermanage-18431.servers.mongodirector.com/admin",
    options: {
        useMongoClient: true,
        ssl: true,
        sslValidate: true,
        sslCA: certFile
    }
};

