const express = require('express');
const urlController = require('../controllers/urlController');

const router = express.Router();

router.post('/shorten', urlController.shortenUrl);
router.get('/:shortUrl', urlController.redirectUrl);

module.exports = router;