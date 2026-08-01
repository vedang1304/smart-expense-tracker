const express = require("express");
const expenseRoutes = require("./routes/expenseroute");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Smart Expense Tracker is running");
});
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec)
);
app.use("/api/expenses", expenseRoutes);



module.exports = app;