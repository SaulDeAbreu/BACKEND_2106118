const Loan = require('../sequelize').Loan;
const Book = require('../sequelize').Book;
const User = require('../sequelize').User;

// const {Loan,Book,User}= require('../sequelize')

exports.getAllLoans = (req, res, next)=>{
    Loan.findAll({include:[User,Book]}).then(results => {
        res.send(results);
    })
}
exports.getByID = (req, res, next) => {
  Loan.findByPK(req.params.id).then(results => {
    res.send(results);
  });
};
exports.updateLoanByID = (req, res, next) => {
  var id = req.params.id;
  var details = req.body;
  Loan.update({ return_date: details.return_date }, {
    where: {
      id:id,
    }
  }).then((results) => {
    res.send(results);
  });                                                                                                                                                                            
};

exports.deleteLoanByID = (req, res, next) => {
  var id = req.params.id;
  Loan.destroy({
    where: {
      id:id
    }
  }).then(results=> {
    res.send("Loan com o id "+id+"eliminado")
  })
}

