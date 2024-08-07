const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded());

app.use("/", require("./routes"));

app.listen(PORT, () => {
	console.log(`Server running on PORT: ${PORT}`);
});
