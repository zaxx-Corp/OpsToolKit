var express = require('express');
var router = express.Router();
let { convertToHTML, convertYAML } = require("../workers/index");
/* GET home page. */
router.get('/', async function (req, res, next) {


  res.render('index', { title: 'Express' });
});

module.exports = router;
