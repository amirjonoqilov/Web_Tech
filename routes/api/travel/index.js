const express = require('express');
const travel_controller = require('../../../controllers/api/travel');

const router = express.Router();

router.get('/', travel_controller.getAll);
router.post('/', travel_controller.create);
router.put('/:id', travel_controller.update); // Ensure this is mapped correctly
router.delete('/:id', travel_controller.delete);

module.exports = router;