var express = require('express');
var router = express.Router();

/* GET home page. */

// router é como o app
router.get('/', function(req, res, next) {
  res.render('index', { title: 'saul' });//render é para disenha uma pagina (esta na /view/index.pug)
});

module.exports = router;
