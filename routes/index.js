const router = require("express").Router();
const fs = require("fs");

router.use(require("./books.route"));
module.exports = router;
