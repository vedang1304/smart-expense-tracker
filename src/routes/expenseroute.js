const express = require("express");
const router = express.Router();

const expensecontroller = require("../controllers/expensecontroller");

router.post("/", expensecontroller.addexpense);
router.get("/", expensecontroller.getAllExpenses);


module.exports = router;