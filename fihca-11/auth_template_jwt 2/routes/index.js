var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});
router.get("/login", function (req, res) {
  res.render("login.ejs", { message: req.flash('loginMessage') });
});

router.post("/login", indexController.login);
router.post("/singup", indexController.signup);

router.get("/singup", function (req, res) {
  res.render("singup.ejs", { message: req.flash("singupMessage") });
});

router.get("/profile", function (req, res) {
  res.render("profile.ejs", { user : req.session.user });
});




module.exports = router;