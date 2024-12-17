import { Router } from 'express';
import { addExpense, getAllExpenses } from '../controllers/expensesController.js';

const router = Router();

router.post('/', addExpense);
router.get('/', getAllExpenses);

export default router;