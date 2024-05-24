const dbServices = require("../DB/book");
const asyncHandler = require("express-async-handler");
const catchError = require("../errorHandlers/errorCatcher");
const successResponse = require("../responseHandlers/successResponse");
const { CONSTANTS } = require("../constants");

exports.addBook = asyncHandler(async (req, res, next) => {
    const newBook = await dbServices.addBook(req.body);
    successResponse({ res, message: CONSTANTS.BOOK_ADD_MESSAGE, data: newBook });
});

exports.updateBook = asyncHandler(async (req, res, next) => {
    if(!req.params.id || req.body){
        next(new catchError(CONSTANTS.GIVEN_DATA_IS_INVALID, 400))
        return
    }
    const updateBook = await dbServices.updateBook(req.params.id, req.body)
    successResponse({ res, message: CONSTANTS.BOOK_UPDATE_MESSAGE, data : updateBook});
});

exports.findAllBooks = asyncHandler(async (req, res) => {
    const books = await dbServices.findAllBook()
    successResponse({ res, message: CONSTANTS.ALL_BOOKS, data : books });
});

exports.findSingleBook = asyncHandler(async (req, res) => {
    if(!req.params.id){
        next(new catchError(CONSTANTS.GIVEN_DATA_IS_INVALID, 400))
        return
    }
    const book = await dbServices.findOneBook(req.params.id)
    successResponse({ res, message: CONSTANTS.SINGLE_BOOK, data : book });
});

exports.removeBook = asyncHandler(async (req, res, next) => {
    if(!req.params.id){
        next(new catchError(CONSTANTS.GIVEN_DATA_IS_INVALID, 400))
        return
    }
    await dbServices.removeBook(req.params.id)
    successResponse({ res, message: CONSTANTS.BOOK_REMOVE_MESSAGE });
});
