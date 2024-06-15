const router = require('express').Router();
const quoteRoutes = require('./quote.routes');
// const userRoutes = require('./quote.routes');

router.use('/quotes', quoteRoutes);
// router.use('/users', userRoutes);

module.exports = router;