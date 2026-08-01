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

        const { category } = req.query;

        const expenses =
            await expenseservice.getAllExpenses(category);

        res.status(200).json(expenses);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
}

async function deleteExpense(req, res) {

    try {

        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).json({
            message: "Invalid expense ID"
            });
        }

        const deleted =
            await expenseservice.deleteExpense(id);

        if (!deleted) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        res.status(204).send("Deleted Successfully");

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}

async function getTotalExpenses(req, res) {

    try {

        const { category } = req.query;

        const total =
            await expenseservice.getTotalExpenses(category);

        res.status(200).json({
            total
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}

module.exports = {
    addexpense,
    getAllExpenses,
    deleteExpense,
    getTotalExpenses
};