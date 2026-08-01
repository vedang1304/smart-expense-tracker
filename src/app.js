const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Smart Expense Tracker is running");
});

module.exports = app;