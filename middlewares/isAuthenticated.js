
const jwt = require("jsonwebtoken");
const catchError = require("../errorHandlers/errorCatcher");

const isAuthenticatedUser = async (req, res, next) => {
    const token = req.cookies.token;
    // console.log("token" , token)
    if (!token) return next(new catchError("Trying unauthorized access!", 404));
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            next(new catchError("Invalid token", 404));
            return;
        }
        req.user = decoded;
        next();
    });
};

const isAuthenticatedAdmin = async (req, res, next) => {
    const user = req.user;
    if (user.role != "admin") {
        next(new catchError("You does not have authority to access!"));
    }
    next();
};

module.exports = { isAuthenticatedUser, isAuthenticatedAdmin };
