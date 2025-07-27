const express = require('express');
const router = express.Router();
const multer = require('multer');
const fileUpload = require('../middleware/fileUpload');
const docGenerator = require('../controllers/docGenerator');

// Single file upload endpoint
router.post('/', fileUpload.single('file'), docGenerator.generateDoc);

module.exports = router;
