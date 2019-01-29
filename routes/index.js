const controller = require('../controller/index');
const express = require('express');
const router = express.Router();

router.route('/')
.get(controller.getBaseUrl);

router.route('/sanitize')
.get(controller.getSanitizer)
.post(controller.uploadFileToSanitize);

module.exports = router;
