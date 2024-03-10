import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

// Middleware
app.use(express.json())

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello World!");
});

// Route for save a new Book
app.post("/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Please fill all the fields.",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log("Connected to Database Successfully");
    app.listen(PORT, () => {
      console.log(`Listening to PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
