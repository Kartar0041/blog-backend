import mongoose, { Schema } from "mongoose";

// Blog Post Schema
const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
},
  { timestamps: true }
);

// Blog Post collection
const Blogs = mongoose.model('Blogs', blogPostSchema);

export {
  Blogs
}