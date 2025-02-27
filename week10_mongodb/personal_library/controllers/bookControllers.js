import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';
import Book from '../models/Book.js';

// get all books
const getAllBooks = asyncHandler(async (req, res) => {
    const books = await Book.find();

    if (!books.length) {
        return res.status(200).json({ msg: 'No books in the DB' });
    }

    res.status(200).json(books);
});

// create a new book
const createBook = asyncHandler(async (req, res) => {
    // We grab exactly the keys that we have in the blueprint (Schema)
    const { title, isbn, author } = req.body;

    if (!title || !isbn || !author)
        throw new ErrorResponse('title, isbn, and author are required', 400);

    const found = await Book.findOne({ isbn });

    if (found) throw new ErrorResponse('Isbn already exists', 400);

    const book = await Book.create({ title, isbn, author });

    res.status(201).json(book);
});

// get one book
const getOneBook = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) throw new ErrorResponse('Book not found', 404);

    res.status(200).json(book);
});

// update a book
const updateBook = asyncHandler(async (req, res) => {
    const { title, isbn, author } = req.body;
    const { id } = req.params;

    if (!title || !isbn || !author)
        throw new ErrorResponse('title, isbn, and author are required', 400);

    const book = await Book.findByIdAndUpdate(
        id,
        { title, isbn, author },
        {
            new: true,
        }
    );

    if (!book) throw new ErrorResponse('Book not found', 404);

    res.status(200).json(book);
});

// delete a book
const deleteOneBook = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) throw new ErrorResponse('Book not found', 404);

    res.status(200).json({
        message: 'Book deleted successfully',
    });
});

export { getAllBooks, getOneBook, createBook, updateBook, deleteOneBook };
