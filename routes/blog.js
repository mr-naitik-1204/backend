const express = require('express');
const router = express.Router();
var multer = require('multer')
const PI = require('../controller/blogC');

// const AM = require('../middelware/Authchek')

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
router.post('/blog', upload.single('image'),  PI.procduct);
router.get('/show', PI.show);
router.delete('/delete/:id',PI.delete);
router.patch('/update/:id', upload.single('image') , PI.update)

module.exports = router;
