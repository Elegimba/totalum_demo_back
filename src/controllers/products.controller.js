const totalumSdk = require('../config/db');

const getAll = async (req, res) => {
    try {
        const response = await totalumSdk.crud.getItems('producto', {
            sort: {
                createdAt: 1
            },
            pagination: {
                page: 0,
                limit: 50
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.toString());
        console.error(error?.response?.data);
    }
}

module.exports = {
    getAll
}