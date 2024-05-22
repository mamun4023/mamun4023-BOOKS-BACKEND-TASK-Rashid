
const router = require('express').Router();
const errorCatcher = require('../errorHandlers/errorCatcher')
const userRoutes = require('./user')
const bookRoutes = require('./book')


router.use("/user", userRoutes);
router.use("/book", bookRoutes);

router.use("*", (req, res, next)=>{
    next(new errorCatcher("Route does not exist!"))
})

module.exports = router;
