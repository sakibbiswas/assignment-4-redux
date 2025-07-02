
// controllers/borrowController.ts

import type { Request, Response, NextFunction } from 'express';
import Borrow from '../models/Borrow';
import Book from '../models/Book';

export const borrowBook = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { bookId } = req.params;
    const { quantity, dueDate } = req.body;

    const book = await Book.findById(bookId);
    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }

    if (book.copies < quantity) {
      res.status(400).json({ message: 'Not enough copies available' });
      return;
    }

    // Update book quantity and availability
    book.copies -= quantity;
    if (book.copies === 0) {
      book.available = false;
    }
    await book.save();

    // Save new borrow record
    const newBorrow = new Borrow({
      book: book._id,
      quantity,
      dueDate,
    });

    const saved = await newBorrow.save();
    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};

export const getBorrowSummary = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: '$book',
          totalQuantity: { $sum: '$quantity' },
        },
      },
      {
        $lookup: {
          from: 'books', // should match Mongoose collection name
          localField: '_id',
          foreignField: '_id',
          as: 'bookInfo',
        },
      },
      {
        $unwind: '$bookInfo',
      },
      {
        $project: {
          _id: 0,
          title: '$bookInfo.title',
          isbn: '$bookInfo.isbn',
          totalQuantity: 1,
        },
      },
    ]);

    res.json(summary);
  } catch (error) {
    next(error);
  }
};




