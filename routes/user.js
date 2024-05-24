const router = require("express").Router();
const userControllers = require("../controllers/user");

router.post("/signup", userControllers.signUp);
router.post("/signin", userControllers.signIn);
router.post("/logout", userControllers.logout);

module.exports = router;
