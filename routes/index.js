var express = require('express');
var router = express.Router();

var db = require('../queries');
debugger;

router.post('/api/usuarios', db.createUsuario);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;