# Multi-Currency Expense Management System

This is a simplified multi-currency expense management system that calculates and displays expenses in a selected base currency.

---

## **Features**

- Add expenses in multiple currencies (USD, EUR, BDT, JPY, etc.)
- Fetch live exchange rates from [Open Exchange Rates API](https://openexchangerates.org/)
- View a summary of all expenses converted to a selected base currency
- Backend APIs built using Node.js and Express.js

---

## **Technologies Used**

### Backend:
- Node.js
- Express.js
- Open Exchange Rates API (for live exchange rates)
- JSON file storage (for simplicity)

---

## **System Requirements**

- Node.js (v14+)
- npm or yarn
- Internet connection for exchange rate fetching

---

## **Setup Instructions**

### Backend:

1. Clone the repository and navigate to the `backend` directory:
   ```bash
   git clone https://github.com/yourusername/multi-currency-expense-management.git
   cd multi-currency-expense-management/backend

2. Install dependencies:
   ```bash
   npm install

3. Create a .env file in the backend directory with your Open Exchange Rates URL & API key:
   ```bash
   OPEN_EXCHANGE_RATES_API_KEY=712fc41274c04ebb8d6d9b4c7543d2d2
   OPEN_EXCHANGE_RATES_API_URL=https://openexchangerates.org/api/latest.json

4. Start the server:
   ```bash
   npm start
The server runs on http://localhost:3000.

5. Backend API Endpoints:
   ```bash
    i. GET /expenses: Fetch all expenses.
    ii. POST /expenses: Add an expense.
    iii. GET /summary?baseCurrency=USD: Get the total converted to the specified currency.


