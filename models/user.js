const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    role : {
        type : String,
        enum : ['user', 'admin']
    }
})


module.exports = mongoose.model('User', userSchema)