import express from 'express';

import { getBooks, getBook, addBook } from '../controllers/books.js';

const router = express.Router();

router.post('/add', addBook);
router.get('/', getBooks);
router.get('/:id', getBook);

export default router;