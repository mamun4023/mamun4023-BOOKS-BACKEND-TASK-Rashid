
const router = require('express').Router();
const userRoutes = require('./user')
const errorCatcher = require('../errorHandlers/errorCatcher')

router.use("/user", userRoutes);

router.use("*", (req, res, next)=>{
    next(new errorCatcher("Route does not exist!"))
})

module.exports = router;
