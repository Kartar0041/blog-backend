import express from "express";
import mongooses from "mongoose";

const app = express();


app.get('/', (req, res) => {
  res.send("Hello Node")
})

const connectDB = async () => {
  try {
    const conn = await mongooses.connect(process.env.DB_URI, {
      useNewUrlParser: true,
    })
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

connectDB()


app.listen(process.env.PORT, () => {
  console.log("App is listening on port", process.env.PORT)
})

