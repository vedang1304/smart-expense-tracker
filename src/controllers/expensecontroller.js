const expenseservice = require("../services/expenseservice");

async function addexpense(req, res) {
    try {
        const expense = await expenseservice.addexpense(req.body);
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

async function getAllExpenses(req, res) {
    try {
        const expenses = await expenseservice.getAllExpenses();

        res.status(200).json(expenses);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
}

module.exports = {
    addexpense,
    getAllExpenses
};