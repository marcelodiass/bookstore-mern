import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send("Hello World!")
})

mongoose
    .connect(mongoDBUrl)
    .then(() => {
        console.log("Connected to Database Successfully")
        app.listen(PORT, () => {
            console.log(`Listening to PORT: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })