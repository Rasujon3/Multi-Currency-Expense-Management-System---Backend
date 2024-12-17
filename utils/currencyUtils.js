import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.OPEN_EXCHANGE_RATES_API_URL;
const API_KEY = process.env.OPEN_EXCHANGE_RATES_API_KEY;
let cachedExchangeRates = null; // Cache to reduce API calls
let lastFetchTime = 0;

// Fetch live exchange rates
export async function fetchExchangeRates() {
  // Fetch new data only if 10 minutes have passed since the last fetch
  await fetchData();
  return cachedExchangeRates;
}

// Validate currency
export async function validateCurrency(currency) {
  const now = Date.now();
  if (!cachedExchangeRates || now - lastFetchTime > 10 * 60 * 1000) {
    await fetchData();
  }
  return await cachedExchangeRates && cachedExchangeRates.hasOwnProperty(currency);
}

// Round amounts based on currency
export function roundAmount(currency, amount) {
  return customRound(amount);
}

function customRound(number) {
  // Check if the decimal part is less than 1
  if (number - Math.floor(number) < .5) {
    return Math.floor(number.toFixed(2)); // Round down
  } else {
      return number.toFixed(2); // Keep as is
  }
}


async function fetchData() {
  const now = Date.now();
  if (!cachedExchangeRates || now - lastFetchTime > 10 * 60 * 1000) {
    try {
      const response = await axios.get(API_URL, {
        params: {
          app_id: API_KEY,
        },
      });
      cachedExchangeRates = response?.data?.rates;
      lastFetchTime = now;
    } catch (error) {
      console.error('Error fetching exchange rates:', error.message);
      throw new Error('Unable to fetch exchange rates. Please try again later.');
    }
  }
}

