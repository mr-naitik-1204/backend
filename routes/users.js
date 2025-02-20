var express = require('express');
var router = express.Router();
const LS = require('../controller/usercontroller')

// const AU = require("../middelware/Authchek")
router.post('/contect', LS.contect);

module.exports = router;   