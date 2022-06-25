import express from 'express';

import {getBooks, getBook, createBook} from '../controllers/books.js'

const router = express.Router();

router.get('/', getBooks)
router.get('/', createBook)
router.get(':/id', getBook)

export default router