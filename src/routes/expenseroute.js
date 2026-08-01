const express = require("express");
const router = express.Router();

const expensecontroller = require("../controllers/expensecontroller");
const validateExpense = require("../middleware/validation");


router.post("/", validateExpense, expensecontroller.addexpense);
router.get("/", expensecontroller.getAllExpenses);
router.get("/total", expensecontroller.getTotalExpenses);
router.delete("/:id", expensecontroller.deleteExpense);


module.exports = router;