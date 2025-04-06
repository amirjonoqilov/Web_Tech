const express = require('express');
const travel_router = require('./travel'); // Updated from 'ticket' to 'travel'

const router = express.Router();

// Registering child routers
router.use('/travel', travel_router); // Updated from '/ticket' to '/travel'
module.exports = router;