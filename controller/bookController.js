const fs = require("fs");

const bookList = (req, res) => {
	try {
		const books = JSON.parse(
			fs.readFileSync("./data/listOfBooks.json", "utf8")
		).map((book, i) => {
			return {
				id: i + 1,
				title: book.title,
				author: book.author,
				year_written: Math.abs(book.year),
				edition: book.country,
				price: book.pages,
			};
		});
		res.status(200).send(books);
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ message: "Internal server error" });
	}
};

const bookDetail = (req, res) => {
	try {
		const book = JSON.parse(
			fs.readFileSync("./data/listOfBooks.json", "utf8")
		)
			.map((book, i) => {
				return {
					id: i + 1,
					title: book.title,
					author: book.author,
					year_written: Math.abs(book.year),
					edition: book.country,
					price: book.pages,
				};
			})
			.find(({ id }) => id === Number(req.params.id));
		if (!book) {
			res.status(404).json({
				message: "Book not found",
			});
		}
		res.status(200).send(book);
	} catch (error) {
		res.status(500).json({
			message: "Internal server error",
		});
	}
};

const ejsBooks = (req, res) => {
	try {
		const books = JSON.parse(
			fs.readFileSync("./data/listOfBooks.json", "utf8")
		).map((book, i) => {
			return {
				id: i + 1,
				title: book.title,
				author: book.author,
				year_written: Math.abs(book.year),
				edition: book.country,
				price: "$" + book.pages,
			};
		});
		res.render("bookList", { books });
	} catch (error) {
		res.status(500).json({ message: "Internal server error" });
	}
};

const ejsBooksDetail = (req, res) => {
	try {
		const book = JSON.parse(
			fs.readFileSync("./data/listOfBooks.json", "utf8")
		)
			.map((book, i) => {
				return {
					id: i + 1,
					title: book.title,
					author: book.author,
					year_written: Math.abs(book.year),
					edition: book.country,
					price: book.pages,
					image: book.imageLink,
				};
			})
			.find(({ id }) => id === Number(req.params.id));
		if (!book) {
			res.status(404).json({
				message: "Book not found",
			});
		}
		res.render("bookDetail", { book });
	} catch (error) {
		res.status(500).json({
			message: "Internal server error",
		});
	}
};

module.exports = { bookList, bookDetail, ejsBooks, ejsBooksDetail };
