const router = require('express').Router();
const bookRoutes = require('./books');
const searchRoutes = require('./search');

router.use('/books', bookRoutes);
router.use('/search', searchRoutes);

module.exports = router;
