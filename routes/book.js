const router = require("express").Router();
const bookControllers = require("../controllers/book");
const { isAuthenticatedUser, isAuthenticatedAdmin } = require("../middlewares/isAuthenticated");

router.post("/add", isAuthenticatedUser, isAuthenticatedAdmin, bookControllers.addBook);
router.patch("/update/:id", isAuthenticatedUser, isAuthenticatedAdmin, bookControllers.updateBook);
router.delete("/:id", isAuthenticatedUser, isAuthenticatedAdmin, bookControllers.removeBook);
router.get("/all", isAuthenticatedUser, bookControllers.findAllBooks);
router.get("/:id", isAuthenticatedUser, bookControllers.findSingleBook);

module.exports = router;
