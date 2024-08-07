const router = require("express").Router();
const {
	bookList,
	bookDetail,
	ejsBooks,
	ejsBooksDetail,
} = require("../controller/bookController");

router.get("/books", bookList);
router.get("/books/:id", bookDetail);
router.get("/ejs/books", ejsBooks);
router.get("/ejs/books/:id", ejsBooksDetail);

module.exports = router;
