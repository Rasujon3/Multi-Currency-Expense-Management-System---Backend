import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import expensesRouter from './routes/expenses.js';
import summaryRouter from './routes/summary.js';
import currencyRouter from './routes/currency.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(json());

// Routes
app.use('/expenses', expensesRouter);
app.use('/summary', summaryRouter);
app.use('/currency', currencyRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});