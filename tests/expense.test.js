const request = require("supertest");
const fs = require("fs/promises");
const path = require("path");

const app = require("../src/app");

const filePath = path.join(
    __dirname,
    "../src/data/expenses.json"
);

beforeEach(async () => {

    await fs.writeFile(
        filePath,
        JSON.stringify([])
    );

});

test("should create a new expense", async () => {

    const response = await request(app)
        .post("/api/expenses")
        .send({
            title:"Pizza",
            amount:500,
            category:"Food",
            date:"2026-08-01"
        });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("Pizza");
    expect(response.body.amount).toBe(500);
    expect(response.body.category).toBe("Food");

});

test("should return all expenses", async () => {

    // Create first expense
    await request(app)
        .post("/api/expenses")
        .send({
            title: "Pizza",
            amount: 500,
            category: "Food",
            date: "2026-08-01"
        });

    // Create second expense
    await request(app)
        .post("/api/expenses")
        .send({
            title: "Uber",
            amount: 250,
            category: "Travel",
            date: "2026-08-01"
        });

    const response = await request(app)
        .get("/api/expenses");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].title).toBe("Pizza");
    expect(response.body[1].title).toBe("Uber");

});

test("should return only expenses from the requested category", async () => {

    await request(app)
        .post("/api/expenses")
        .send({
            title: "Pizza",
            amount: 500,
            category: "Food",
            date: "2026-08-01"
        });

    await request(app)
        .post("/api/expenses")
        .send({
            title: "Uber",
            amount: 300,
            category: "Travel",
            date: "2026-08-01"
        });

    await request(app)
        .post("/api/expenses")
        .send({
            title: "Burger",
            amount: 250,
            category: "Food",
            date: "2026-08-01"
        });

    const response = await request(app).get("/api/expenses?category=Food");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(2);
    expect(response.body[0].category).toBe("Food");
    expect(response.body[1].category).toBe("Food");

});
