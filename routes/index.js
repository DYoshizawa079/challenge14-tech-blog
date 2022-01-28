// Collect the endpoints in the /api folder and connect them with the "/api" path
const router = require('express').Router();
// Import routes in the /api folder
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.use((request, response) => {
    response.status(404).end();
})

module.exports = router;