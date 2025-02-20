const express = require('express');
const router = express.Router();
var multer = require('multer')
const OP = require('../controller/manuC');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })
router.post('/manu',upload.single('img'),OP.manu);
router.get('/show', OP.show);
router.delete('/delete/:id',OP.delete);
router.patch('/update/:id',upload.single('img'),OP.update)

module.exports = router;
