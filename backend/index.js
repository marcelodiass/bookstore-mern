import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (request, response) => {
    console.log(request)
    return response.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`)
})
