const { Totalum } = require('totalum-api-sdk');
require('dotenv').config();

const totalum = new Totalum({
    apiKey: process.env.TOTALUM_API_KEY,
});

module.exports = totalum;