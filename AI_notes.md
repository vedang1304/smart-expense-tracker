# AI_NOTES.md

## AI Tools Used

I used **ChatGPT** as a development assistant throughout this assignment. The AI was used to understand concepts, review implementation ideas, and improve code quality while I remained responsible for the final call before making any changes to code.

---

# 1. AI-Generated vs. Self-Written Code

### AI Assistance

AI was used to help with:

* Designing the project folder structure.
* Explaining the Express.js architecture (Routes → Controllers → Services).
* Creating Swagger/OpenAPI documentation.
* Creating the Dockerfile and `.dockerignore`.
* Writing Jest and Supertest integration tests.
* Preparing the README documentation as well the AI readme.
* Explaining JavaScript concepts such as `reduce()`, `filter()`, `findIndex()`.

### Implemented and Integrated by Me

I was responsible for:

* Creating the project and Git repository.
* Setting up the Express application.
* Organizing the project structure.
* Writting all code into the project and also verifying the code provided by AI.
* Understanding the certain changes in code and then implementing it.
* Fixing integration issues during development.
* Running and verifying all API endpoints using Postman.
* Running and validating the automated test suite.
* Building and running the application using Docker.
* Verifying the Swagger documentation.
* Making commits throughout development.

---

# 2. Validation and Changes Made

I reviewed and validated the AI-generated code before using it.

Validation steps included:

* Testing every endpoint in Postman.
* Running Jest and Supertest integration tests.
* Building the Docker image successfully.
* Running the application inside a Docker container.
* Verifying the Swagger UI documentation.
* Checking that data was correctly stored in the JSON file.
* Confirming correct HTTP status codes for success and error responses.

During development I also made adjustments, including:

* Organizing the code into separate routes, controllers, services, middleware, and configuration folders.
* Adding input validation middleware before controller execution.
* Improving API responses and ensuring appropriate HTTP status codes were returned.
* Refining the project structure for readability and maintainability.

---

# 3. AI Suggestions Not Used

Some AI suggestions were intentionally not adopted, including:

* Using a database such as MongoDB or PostgreSQL. The assignment explicitly stated that a database was not required, so a local JSON file was used instead.
* Adding authentication and user management. These features were outside the scope of the assignment.
* Adding additional endpoints that were not part of the required functionality.
* Introducing unnecessary third-party libraries when a simpler built-in Node.js solution was sufficient.

---

# Reflection

AI significantly accelerated development by providing explanations, implementation ideas, and documentation examples. However, every feature was manually integrated, tested, and verified before being accepted into the final project. AI served as a development assistant rather than replacing the implementation, debugging, or validation process.
