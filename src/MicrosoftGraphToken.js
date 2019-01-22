'use strict';

let fs = require('fs'),
    path = require('path'),
    camelCase = require('lodash/camelCase');

module.exports = class MicrosoftGraphToken {

    constructor(options) {


        fs.readdirSync(path.join(__dirname, 'api')).forEach(name => {
            let prop = camelCase(name.slice(0, -3));
            let Resource = require(`./api/${name}`);

            this[prop] = new(Resource)(options);
        });
    }
};