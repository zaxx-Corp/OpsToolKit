var express = require('express');
var router = express.Router();
let { convertToHTML, convertYAML } = require("../workers/index");
/* GET home page. */
router.get('/:slug', async function (req, res, next) {

    let slug = req.params.slug;
    if (slug === "one") {
        const html = await convertToHTML();
        const yamlObj = convertYAML("basic.yaml");

        res.render('page', { title: 'Express', html, yamlObj });
    } else {
        next();
    }


});

module.exports = router;
