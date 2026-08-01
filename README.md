# Smart Expense Tracker API

A RESTful API built with **Node.js** and **Express.js** to manage personal expenses. The API allows users to add, view, filter, calculate totals, and delete expenses. Expense data is stored in a local JSON file, making the application lightweight and easy to run without a database.

## Features

* Add a new expense
* View all expenses
* Filter expenses by category
* Calculate total expenses
* Calculate total expenses by category
* Delete an expense
* Input validation using middleware
* Interactive API documentation using Swagger/OpenAPI
* Docker support
* Automated API tests using Jest and Supertest

---

# Tech Stack

* Node.js
* Express.js
* Swagger (swagger-ui-express, swagger-jsdoc)
* Jest
* Supertest
* Docker

---

# Project Structure

```text
smart-expense-tracker/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
├── tests/
│   └── expense.test.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── README.md
├── AI_NOTES.md
└── .gitignore

```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd smart-expense-tracker
```

Install dependencies:

```bash
npm install
```

---

# Running the Server

Start the application:

```bash
npm start
```

For development (with automatic restart):

```bash
npm run dev
```

The server runs at:

```text
http://localhost:3000
```

---

# Running Tests

Run all automated tests:

```bash
npm test
```

---

# Swagger API Documentation

Once the server is running, open:

```text
http://localhost:3000/api-docs
```

Swagger provides interactive API documentation where you can explore and test every endpoint.

---

# Docker

## Build Docker Image

```bash
docker build -t smart-expense-tracker .
```

## Run Docker Container

```bash
docker run -d --name expense-api -p 3000:3000 smart-expense-tracker
```

## Stop Container

```bash
docker stop expense-api
```

## Start Container

```bash
docker start expense-api
```

---

# API Endpoints

## Add Expense

**POST** `/api/expenses`

Example Request:

```json
{
  "title": "Pizza",
  "amount": 500,
  "category": "Food",
  "date": "2026-08-01"
}
```

---

## Get All Expenses

**GET**

```text
/api/expenses
```

---

## Filter Expenses by Category

**GET**

```text
/api/expenses?category=Food
```

---

## Calculate Total Expenses

**GET**

```text
/api/expenses/total
```

---

## Calculate Total by Category

**GET**

```text
/api/expenses/total?category=Food
```

---

## Delete Expense

**DELETE**

```text
/api/expenses/{id}
```

Example:

```text
/api/expenses/1
```

---

# HTTP Status Codes

| Status Code | Description                         |
| ----------- | ----------------------------------- |
| 200         | Request successful                  |
| 201         | Resource created successfully       |
| 204         | Resource deleted successfully       |
| 400         | Invalid request or validation error |
| 404         | Resource not found                  |
| 500         | Internal server error               |

---

# Testing

The project includes integration tests using **Jest** and **Supertest**. Tests cover:

* Creating an expense
* Retrieving all expenses
* Filtering by category
* Calculating total expenses
* Calculating total expenses by category
* Deleting an expense
* Request validation

Run the test suite with:

```bash
npm test
```

---

