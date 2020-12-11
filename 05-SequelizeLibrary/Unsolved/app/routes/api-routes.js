// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
//const Sequelize = require("sequelize");
var Book = require("../models/book.js");
//const { Op } = Op;

// Routes
// =============================================================
module.exports = function (app) {
  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", async (req, res) => {
    const books = await Book.findAll({});
    res.json(books);
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", async (req, res) => {
    const book = await Book.findAll({
      where: {
        title: req.params.book,
      },
    });
    res.json(book);
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", async (req, res) => {
    const books = await Book.findAll({
      where: {
        genre: req.params.genre,
      },
    });
    res.json(books);
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", async (req, res) => {
    const books = await Book.findAll({
      where: {
        author: req.params.author,
      },
    });
    res.json(books);
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", async (req, res) => {
    const books = await Book.findAll({
      where: {
        pages: {
          $gte: 150,
        },
      },
    });
    res.json(books);
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", async (req, res) => {
    const books = await Book.findAll({
      where: {
        pages: {
          $lte: 150,
        },
      },
    });
    res.json(books);
  });

  // Add sequelize code to create a book
  app.post("/api/new", async (req, res) => {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages,
    });
    res.json(newBook);
  });

  // Add sequelize code to delete a book
  app.delete("/api/book/:id", async (req, res) => {
    const options = {
      where: {
        id: req.params.id,
      },
    };
    const result = await Book.destroy(options);
    res.json(result);
  });
};
