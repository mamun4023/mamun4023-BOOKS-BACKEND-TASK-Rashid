const jwt = require("jsonwebtoken");
const catchError = require("../errorHandlers/errorCatcher");

const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token
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

module.exports = {isAuthenticated};
