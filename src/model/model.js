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


// Users Schema
const userSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  }
});

// Collections
const Blogs = mongoose.model('Blogs', blogPostSchema);
const Users = mongoose.model('Users', userSchema);

export {
  Blogs,
  Users
}