const express = require("express");
const expenseRoutes = require("./routes/expenseroute");


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Smart Expense Tracker is running");
});

app.use("/api/expenses", expenseRoutes);



module.exports = app;