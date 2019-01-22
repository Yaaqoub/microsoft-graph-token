let request = require('request-promise'),
    config = require('./../../config/config');


const base = {

    getAuthorizationURI() {
        return config.AUTHORIZE_URI + '?response_type=' + config.RESPONSE_TYPE +
            '&client_id=' + this.options.CLIENT_ID + '&redirect_uri=' + this.options.REDIRECT_URI;
    },

    getToken() {

    }
};

module.exports = base;