const { TotalumApiSdk } = require('totalum-api-sdk');
require('dotenv').config();

const options = {
    apiKey: {
        'api-key': process.env.TOTALUM_API_KEY,
    },
};

const totalum = new TotalumApiSdk(options);

module.exports = totalum;