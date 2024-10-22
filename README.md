Personal Expense Tracker - Node.js Backend
Overview
This is a RESTful API developed using Node.js and Express for managing personal financial records. Users can add, view, update, and delete their income and expense transactions. A summary of total income, expenses, and balance can be retrieved, with optional filtering by date range or category.

Features
Add new income or expense transactions
Retrieve all transactions or by ID
Update and delete transactions
Get summary data of income, expenses, and balance
Optional filters for date range and category
Technologies Used
Backend Framework: Node.js with Express
Database: SQLite (default) or MongoDB (optional)
ORM/Database Management: Sequelize (for SQLite)
Authentication: Optional JWT for securing routes
Date & Time Handling: Handled via JavaScript and database features
Prerequisites
Node.js installed
SQLite (default) or MongoDB if you prefer a NoSQL solution
Postman or any other API testing tool
Installation
1. Clone the Repository
git clone https://github.com/your-username/expense-tracker-api.git
cd expense-tracker-api
2. Install Dependencies
npm install
3. Database Setup
SQLite (default): No setup needed, the project is pre-configured for SQLite.
MongoDB (optional): Update the connection string in config.js to point to your MongoDB instance.
4. Run Database Migrations (SQLite)
To set up the SQLite database and create the necessary tables:
npm run migrate
5. Start the Server
Start the Express server on http://localhost:5000:
npm start
API Endpoints
Here are the endpoints available for managing transactions:

1. Add a Transaction
Endpoint: POST /api/transactions

Description: Add a new transaction (income or expense).

Request Body:

json
Copy code
{
  "type": "expense",
  "category": "Food",
  "amount": 50.00,
  "date": "2024-10-22",
  "description": "Dinner at a restaurant"
}
Response:

json
Copy code
{
  "message": "Transaction added successfully",
  "transaction": {
    "id": 1,
    "type": "expense",
    "category": "Food",
    "amount": 50.00,
    "date": "2024-10-22",
    "description": "Dinner at a restaurant"
  }
}
2. Get All Transactions
Endpoint: GET /api/transactions

Description: Retrieve all transactions.

Response:

json
Copy code
[
  {
    "id": 1,
    "type": "expense",
    "category": "Food",
    "amount": 50.00,
    "date": "2024-10-22",
    "description": "Dinner at a restaurant"
  }
]
3. Get a Transaction by ID
Endpoint: GET /api/transactions/:id

Description: Retrieve a specific transaction by its ID.

Response:

json
Copy code
{
  "id": 1,
  "type": "expense",
  "category": "Food",
  "amount": 50.00,
  "date": "2024-10-22",
  "description": "Dinner at a restaurant"
}
4. Update a Transaction
Endpoint: PUT /api/transactions/:id

Description: Update a specific transaction by its ID.

Request Body:

json
Copy code
{
  "type": "income",
  "category": "Salary",
  "amount": 1000.00,
  "date": "2024-10-22",
  "description": "Monthly salary"
}
Response:

json
Copy code
{
  "message": "Transaction updated successfully"
}
5. Delete a Transaction
Endpoint: DELETE /api/transactions/:id

Description: Delete a transaction by its ID.

Response:

json
Copy code
{
  "message": "Transaction deleted successfully"
}
6. Get Transaction Summary
Endpoint: GET /api/summary

Description: Get a summary of total income, total expenses, and balance. You can optionally filter by date range and category.

Response:

json
Copy code
{
  "totalIncome": 1000.00,
  "totalExpenses": 50.00,
  "balance": 950.00
}
7. Optional Filters (Summary)
Filter by Date Range: Append ?startDate=2024-10-01&endDate=2024-10-31 to the /api/summary endpoint to filter results by date.
Filter by Category: Append ?category=Food to the /api/summary endpoint to filter results by category.
Testing the API
You can test the API endpoints using Postman or CURL:

Example: Add a Transaction (Postman)
Select POST method.

Enter http://localhost:5000/api/transactions in the URL.

In the Body tab, select raw and set the format to JSON.

Add the following data in the body:

json
{
  "type": "expense",
  "category": "Food",
  "amount": 50.00,
  "date": "2024-10-22",
  "description": "Dinner at a restaurant"
}
Click Send to submit the request.

Example: Get All Transactions (Postman)
Select GET method.
Enter http://localhost:5000/api/transactions in the URL.
Click Send to retrieve all transactions.


