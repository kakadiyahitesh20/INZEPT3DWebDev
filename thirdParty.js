'use strict';

const Good = require('good');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const cons = require('hapi-cors');
const Pack = require('./package.json');

/** define third party plugins */
let plugins = [
  {
    register: Good,
    options: {
      reporters: {
        console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{
            response: '*',
            log: '*'
          }]
        }, {
          module: 'good-console'
        }, 'stdout']
      }
    }
  },
  Inert,
  Vision,
  {
    'register': HapiSwagger,
    'options': {
      info: {
        title: Pack.title,
        version: Pack.version
      }
    }
  },
  {
    register: require('hapi-api-secret-key').plugin,
    options: {
      secrets: [
       'RReio98$3#hsdhfDFSe31&sE4e5665DGs'

      ],
      fetchUserApiKey: function (request) {
        return request.headers["api-key"] || request.query["api-key"];
      },
      shouldApplyApiFilter: function (request) {
        let tags = request.route.settings.tags;
        return tags && tags.indexOf('api') >= 0;
      }
    }
  },
];


module.exports = plugins;