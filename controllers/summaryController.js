const { readExpenses } = require('../models/expensesModel').default;
const { fetchExchangeRates ,validateCurrency, roundAmount, exchangeRates } = require('../utils/currencyUtils');

exports.getSummary = async (req, res) => {
  const baseCurrency = req.query.baseCurrency;

  try {
    const exchangeRates = await fetchExchangeRates();

    if (!validateCurrency(baseCurrency)) {
      return res.status(400).json({ error: 'Unsupported base currency' });
    }

    const expenses = readExpenses();
    const total = expenses.reduce((sum, expense) => {
      const rate = exchangeRates[expense.currency];
      const baseRate = exchangeRates[baseCurrency];
      return sum + (expense.amount * (1 / rate) * baseRate);
    }, 0);

    res.json({
      baseCurrency,
      total: roundAmount(baseCurrency, total),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
