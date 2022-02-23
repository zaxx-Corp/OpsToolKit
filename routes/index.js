var express = require('express');
const { getProducts } = require('../workers');
var router = express.Router();
/* GET home page. */
router.get('/', async function (req, res, next) {

  const prods = await getProducts();
  res.render('index', { title: 'OpsWorks', prods });
});

module.exports = router;
