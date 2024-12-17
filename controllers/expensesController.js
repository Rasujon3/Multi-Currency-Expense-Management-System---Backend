const { readExpenses, writeExpenses } = require('../models/expensesModel.js').default;
const { validateCurrency, roundAmount } = require('../utils/currencyUtils.js');

exports.addExpense = (req, res) => {
  const { description, amount, currency } = req.body;

  if (!description || typeof description !== 'string') {
    return res.status(400).json({ error: 'Invalid description' });
  }

  if (typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  if (!validateCurrency(currency)) {
    return res.status(400).json({ error: 'Unsupported currency' });
  }

  const expenses = readExpenses();
  const newExpense = {
    id: expenses.length + 1,
    description,
    amount: roundAmount(currency, amount),
    currency,
  };

  expenses.push(newExpense);
  writeExpenses(expenses);

  res.status(201).json(newExpense);
};

exports.getAllExpenses = (req, res) => {
  const expenses = readExpenses();
  res.json(expenses);
};