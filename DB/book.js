const bookModel = require("../models/book");

exports.add = async (data) => {
    return await bookModel.create(data);
};

exports.update = async (id, updateData) => {
    return await bookModel.findOneAndUpdate({ _id: id }, updateData, { new: true });
};

exports.remove = async (id) => {
    return await bookModel.findOneAndDelete({ _id: id });
};

exports.singleBook = async (id) => {
    return await bookModel.findOne({ _id: id });
};

exports.allBook = async (id) => {
    return await bookModel.find({}).populate('author');
};
