const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        author: [
            {
                type: mongoose.Schema.ObjectId,
                required : true,
                ref: "User",
            },
        ],
    },
    { timestamps: true }
);


module.exports = mongoose.model("book", bookSchema);
