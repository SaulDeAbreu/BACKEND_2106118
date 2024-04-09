var express = require("express");
var loanController= require('../controllers/loansController')
var router = express.Router();

/* GET users listing. */
router.get("/", loanController.getAllLoans);
router.get("/:id", loanController.getByID);
router.delete("/:id", loanController.deleteLoanByID);
router.post("/update", loanController.updateLoanByID);
router.put("/:id", loanController.updateLoanByID);

module.exports = router;
