import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'

const app = express();

// Middleware
app.use(express.json());
app.use('/books', booksRoute)

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
