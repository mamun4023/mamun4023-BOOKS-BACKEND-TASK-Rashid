const dbServices = require("../DB/user");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const catchError = require("../errorHandlers/errorCatcher");
const successResponse = require("../responseHandlers/successResponse");
const { CONSTANTS } = require("../constants");
const { passwordMatching, generateToken } = require("../services/auth");

exports.signUp = asyncHandler(async (req, res, next) => {
    const user = await dbServices.findUser(req.body.email);
    if (user) {
        next(new catchError(CONSTANTS.USER_ALREADY_EXIST, 400));
        return;
    }

    const newuser = await dbServices.createUser(req.body);

    successResponse({ res, message: CONSTANTS.SIGNUP_MESSAGE, data: newuser });
});

exports.signIn = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await dbServices.findUser(email);
    if (!user) {
        next(new catchError(CONSTANTS.USER_DOES_NOT_EXIST, 400));
        return;
    }

    const isMatched = await passwordMatching(password, user.password);

    if (!isMatched) {
        next(new catchError(CONSTANTS.PASSWORD_IS_INVALID, 400));
        return;
    }

    const token = await generateToken(user);
    res.cookie("token", token, {
        httpOnly: true,
        signed: true,
        secure: true,
        maxAge: 60 * 60 * 1024,
    });
    successResponse({ res, message: CONSTANTS.LOGIN_MESSAGE, data: { token } });
});


exports.logout = asyncHandler(async(req, res)=>{
    res.clearCookie("token")
    successResponse({ res, message: CONSTANTS.LOGOUT_MESSAGE });
})