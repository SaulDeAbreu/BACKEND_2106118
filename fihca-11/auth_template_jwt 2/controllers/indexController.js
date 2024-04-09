const User = require("../sequelize").User;

var jwt = require('jsonwebtoken')
function generateAcessToken(params) {
    
}

exports.login = (req, res, next) => {
  var { email, password } = req.body;
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    if (user == null) {
      req.flash("loginMessage", "User not found with that email");
      res.redirect("/login");
    } else if (user.password != password) {
      req.flash("loginMessage", "Wrong password");
      res.redirect("/login");
    } else {
      req.session.user = user;
      res.redirect("/profile");
    }
  });
};

exports.signup = (req, res, next) => {
  var { email, password } = req.body;
};
