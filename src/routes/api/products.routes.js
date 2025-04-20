const { getAll } = require('../../controllers/products.controller');

const router = require('express').Router();

router.get('/', getAll);

module.exports = router;