const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');

router.get('/', home_controller.index); // Render homepage
router.get('/add', home_controller.add); // Render "Add Travel Post" page
router.get('/update/:id', home_controller.update); // Render "Update Travel Post" page

module.exports = router;
