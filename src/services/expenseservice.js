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
async function getAllExpenses(category) {

    const expenses = await readExpenses();

    if (!category) {
        return expenses;
    }

    return expenses.filter(expense =>
        expense.category.toLowerCase() === category.toLowerCase()
    );

}

async function deleteExpense(id) {

    const expenses = await readExpenses();

    const index = expenses.findIndex(
        expense => expense.id === id
    );

    if (index === -1) {
        return false;
    }

    expenses.splice(index, 1);

    await writeExpenses(expenses);

    return "Deleted Successfully";

}

async function getTotalExpenses(category) {

    const expenses = await readExpenses();

    const filteredExpenses = category
        ? expenses.filter(expense =>
              expense.category.toLowerCase() ===
              category.toLowerCase()
          )
        : expenses;

    const total = filteredExpenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    return total;

}

module.exports = {
    addexpense,
    getAllExpenses,
    deleteExpense,
    getTotalExpenses

};