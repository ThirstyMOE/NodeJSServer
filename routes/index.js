var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Ya came to the right place.");
    res.render('index', { title: 'My World, Neo' }); // tries to render pug file through view engine
});

module.exports = router;
