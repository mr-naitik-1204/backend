var express = require('express');
var router = express.Router();
const LS = require('../controller/resrvation')

// const AU = require("../middelware/Authchek")
router.post('/send', LS.resrvation);

module.exports = router;   