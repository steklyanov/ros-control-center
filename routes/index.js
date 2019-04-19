const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/index');
router.all('/', ctrlHome.getIndex);

module.exports = router;