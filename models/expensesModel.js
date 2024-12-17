import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the JSON file
const expensesFilePath = join(__dirname, '../data/expenses.json');

// Ensure the file exists
function ensureFileExists() {
  const dirPath = join(__dirname, '../data');
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  if (!fs.existsSync(expensesFilePath)) {
    fs.writeFileSync(expensesFilePath, JSON.stringify([]));
  }
}

function readExpenses() {
  ensureFileExists();
  if (!fs.existsSync(expensesFilePath)) {
    return [];
  }
  const data = fs.readFileSync(expensesFilePath, 'utf-8');
  return JSON.parse(data);
}

function writeExpenses(expenses) {
  ensureFileExists();
  fs.writeFileSync(expensesFilePath, JSON.stringify(expenses, null, 2));
}

export default { readExpenses, writeExpenses };