var express = require('express');
var router = express.Router();
var Test = require('../models/test');

/* GET home page. */
router.get('/', function (req, res, next) {
  json = { 
    title: 'IFMS', 
    subtitle: 'Instituto Federal de Mato Grosso do Sul' 
  };

  Test.create(json, function (err, test) {
    if (err) return handleError(err);
    res.render('index', { title: test.title, subtitle: test.subtitle });
  });
});

module.exports = router;