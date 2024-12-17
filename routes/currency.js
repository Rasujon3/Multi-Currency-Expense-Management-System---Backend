import { Router } from 'express';
import { getCurrency } from '../controllers/currencyController.js';

const router = Router();

router.get('/', getCurrency);

export default router;