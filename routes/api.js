const api = require("express").Router();
const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter");
const booksRouter = require("./booksRouter");
const authorsRouter = require("./authorsRouter");
const collectionRouter = require("./collectionRouter");

api.use("/api/login", loginRouter);
api.use("/api/register", registerRouter);
api.use("/api/books", booksRouter);
api.use("/api/authors", authorsRouter);
api.use("/api/users", collectionRouter);

module.exports = api;
