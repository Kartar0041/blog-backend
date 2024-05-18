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
  createdAt: { 
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

// Blog Post collection
const Blogs = mongoose.model('Blogs', blogPostSchema);

export {
  Blogs
}