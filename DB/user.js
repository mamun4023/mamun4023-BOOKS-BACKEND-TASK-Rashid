const mongoose = require('mongoose')
const userModel = require('../models/user')

exports.createUser = async(data)=>{
    return await userModel.create(data)
}

exports.findUser = async(email)=>{
    return await userModel.findOne({email})
}