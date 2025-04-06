const express = require('express');
const travel_controller = require('../../../controllers/api/travel');

const router = express.Router();

router.get('/', travel_controller.getAll); // Fetch all travel posts
router.post('/', travel_controller.create); // Create a new travel post
router.put('/:id', travel_controller.update); // Update a travel post by ID
router.delete('/:id', travel_controller.delete); // Delete a travel post by ID

module.exports = router;