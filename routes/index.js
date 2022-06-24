/* Filename: index.js
 Student: Saba Aziz
 StudentId: 301180623
 Class:COMP 229
*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
