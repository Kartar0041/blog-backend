import express from "express";
import mongooses from "mongoose";
import { blogRouter } from "./src/routes/blogRoutes.js";

const app = express();


app.get('/test', (req, res) => {
  res.send("Hello Node")
})

// Routes for application
app.use('/', blogRouter);

const connectDB = async () => {
  try {
    const conn = await mongooses.connect(process.env.DB_URI, {
      useNewUrlParser: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

connectDB();

app.listen(process.env.PORT, () => {
  console.log("App is listening on port", process.env.PORT)
})

