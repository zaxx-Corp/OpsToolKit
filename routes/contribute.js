var express = require('express');
var router = express.Router();
/* GET Contribute page. */
router.get('/', async function (req, res, next) {
    res.render('contribute', { title: 'Contribute' });
});

module.exports = router;
