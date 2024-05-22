import mongoose, { Schema } from "mongoose";

// Category Post Schema
const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    parentId: {
        type: String,
    }
},
    { timestamps: true }
);

// Category Post collection
 export const Category = mongoose.model('Category', categorySchema);
