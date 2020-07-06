var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/spin', function(req, res, next) {
  res.render('spin');
});

router.get('/bio', function(req, res, next) {
  res.render('bio');
});

router.get('/bioandspin', function(req, res, next) {
  res.render('bioandspin');
});

module.exports = router;
