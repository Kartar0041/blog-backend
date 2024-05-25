import express from "express";
import mongooses from "mongoose";
import { blogRouter } from "./src/routes/blogRoutes.js";
import { categoryRouter } from "./src/routes/category.js";
import { userRouter } from "./src/routes/userRoutes.js";
const app = express();



// Used express json (alternate for body-parser)
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


app.get('/test', (req, res) => {
  res.send("Hello Node")
})

// Routes for application
app.use('/', blogRouter);
app.use("/category",categoryRouter)


const connectDB = async () => {
  try {
    const conn = await mongooses.connect("mongodb://localhost:27017/blog_app")
    console.log(`MongoDB Connected: mongodb://localhost:27017/blog_app`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

connectDB();

app.listen(5000, () => {
  console.log("App is listening on port", 5000)
})

