const { getAll } = require('../../controllers/clients.controller');

const router = require('express').Router();

router.get('/', getAll);

module.exports = router;