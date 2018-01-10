const express = require('express');
const router = express.Router();

// Require controller modules
const catalog_controller = require('../controllers/catalogController');

/* GET catalog home page. */
router.get('/', catalog_controller.index);

module.exports = router;
