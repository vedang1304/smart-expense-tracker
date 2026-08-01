const {
    readExpenses,
    writeExpenses
} = require("../utils/helper");

async function addexpense(expenseData) {

    const expenses = await readExpenses();

    const newExpense = {
        id: expenses.length > 0
            ? expenses[expenses.length - 1].id + 1
            : 1,

        title: expenseData.title,
        amount: expenseData.amount,
        category: expenseData.category,
        date: expenseData.date
    };

    expenses.push(newExpense);

    await writeExpenses(expenses);

    return newExpense;
}
async function getAllExpenses() {

    return await readExpenses();

}

module.exports = {
    addexpense,
    getAllExpenses
};