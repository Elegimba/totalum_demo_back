const router = require('express').Router();

router.use('/products', require('./api/products.routes'));
router.use('/clients', require('./api/clients.routes'));
router.use('/orders', require('./api/orders.routes'));

module.exports = router;