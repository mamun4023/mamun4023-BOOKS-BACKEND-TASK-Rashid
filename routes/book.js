const router = require("express").Router();
const bookControllers = require("../controllers/book");
const { isUser, isAdmin } = require("../middlewares/auth");

router.post("/add", isUser, isAdmin, bookControllers.addBook);
router.patch("/update/:id", isUser, isAdmin, bookControllers.updateBook);
router.delete("/:id", isUser, isAdmin, bookControllers.removeBook);
router.get("/all", isUser, bookControllers.findAllBooks);
router.get("/:id", isUser, bookControllers.findSingleBook);

module.exports = router;
