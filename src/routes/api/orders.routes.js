const { getAll } = require('../../controllers/orders.controller');

const router = require('express').Router();

router.get('/', getAll);

module.exports = router;