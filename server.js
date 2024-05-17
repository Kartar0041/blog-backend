import express from "express";
import mongooses from "mongoose";

const app = express();


app.get('/', (req, res) => {
    res.send("Hello Node")
})


app.listen(4200, () => {
    console.log("App is listening on port")
})
// mongodb://localhost:27017