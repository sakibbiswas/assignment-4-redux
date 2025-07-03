import { Router } from 'express';
import { borrowBook, getBorrowSummary } from '../controllers/borrowController.js';

const router = Router();

router.post('/:bookId', borrowBook);
router.get('/summary/all', getBorrowSummary);

export default router;




