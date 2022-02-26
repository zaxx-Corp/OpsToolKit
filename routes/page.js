var express = require('express');
var router = express.Router();
let { convertToHTML, convertYAML } = require("../workers/index");
/* GET home page. */
router.get('/:slug', async function (req, res, next) {

    let slug = req.params.slug;
    let readmes = [];

    const yamlObj = convertYAML(slug);
    if (yamlObj instanceof Object) {
        if (slug === yamlObj.product.toLowerCase()) {
            for (let i = 0; i < yamlObj.steps.length; i++) {
                readmes.push(await convertToHTML(yamlObj.steps[i].file))
            }
            res.render('page', { title: yamlObj.product, yamlObj, html: readmes });
        } else {
            next();
        }
    }
    else
        next();


});

module.exports = router;
