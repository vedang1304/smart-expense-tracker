const express = require("express");
const router = express.Router();

const expensecontroller = require("../controllers/expensecontroller");
const validateExpense = require("../middleware/validation");


/**
 * @swagger
 * /api/expenses:
 *   post:
 *     summary: Add a new expense
 *     tags:
 *       - Expenses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - amount
 *               - category
 *               - date
 *             properties:
 *               title:
 *                 type: string
 *                 example: Pizza
 *               amount:
 *                 type: number
 *                 example: 500
 *               category:
 *                 type: string
 *                 example: Food
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2026-08-01"
 *     responses:
 *       201:
 *         description: Expense created successfully
 *       400:
 *         description: Invalid request
 */
router.post("/", validateExpense, expensecontroller.addexpense);
/**
 * @swagger
 * /api/expenses:
 *   get:
 *     summary: Get all expenses
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: query
 *         name: category
 *         required: false
 *         description: Filter expenses by category
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of expenses
 */
router.get("/", expensecontroller.getAllExpenses);
/**
 * @swagger
 * /api/expenses/total:
 *   get:
 *     summary: Calculate total expenses
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: query
 *         name: category
 *         required: false
 *         description: Filter total by category
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Total expenses calculated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: number
 *                   example: 800
 */
router.get("/total", expensecontroller.getTotalExpenses);
/**
 * @swagger
 * /api/expenses/{id}:
 *   delete:
 *     summary: Delete an expense by ID
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the expense to delete
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Expense deleted successfully
 *       400:
 *         description: Invalid expense ID
 *       404:
 *         description: Expense not found
 */
router.delete("/:id", expensecontroller.deleteExpense);


module.exports = router;