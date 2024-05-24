const dbServices = require("../DB/book");
const asyncHandler = require("express-async-handler");
const catchError = require("../errorHandlers/errorCatcher");
const successResponse = require("../responseHandlers/successResponse");
const { CONSTANTS } = require("../constants");

exports.addBook = asyncHandler(async (req, res, next) => {
    const newBook = await dbServices.add(req.body);
    successResponse({ res, message: CONSTANTS.BOOK_ADD_MESSAGE, data: newBook });
});

exports.updateBook = asyncHandler(async (req, res, next) => {
    const updateBook = await dbServices.update(req.params.id, req.params.data)
    successResponse({ res, message: CONSTANTS.BOOK_UPDATE_MESSAGE, data : updateBook});
});

exports.findAllBooks = asyncHandler(async (req, res) => {
    const books = await dbServices.allBook()
    successResponse({ res, message: CONSTANTS.ALL_BOOKS, data : books });
});

exports.findSingleBook = asyncHandler(async (req, res) => {
    const book = await dbServices.singleBook(req.params.id)
    successResponse({ res, message: CONSTANTS.SINGLE_BOOK, data : book });
});

exports.removeBook = asyncHandler(async (req, res) => {
    const data = await dbServices.remove(req.params.id)
    successResponse({ res, message: CONSTANTS.BOOK_REMOVE_MESSAGE });
});
