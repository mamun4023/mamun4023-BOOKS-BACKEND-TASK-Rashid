const bookModel = require("../models/book");

exports.addBook = async (data) => {
    return await bookModel.create(data);
};

exports.updateBook = async (id, updateData) => {
    return await bookModel.findOneAndUpdate({ _id: id }, updateData, { new: true });
};

exports.removeBook = async (id) => {
    return await bookModel.findOneAndDelete({ _id: id });
};

exports.findOneBook = async (id) => {
    return await bookModel.findOne({ _id: id });
};

exports.findAllBook = async (id) => {
    return await bookModel.find({}).populate('author');
};
