import { Router } from "express";
import { authVerify } from "../utils/authMiddleware.js";

const blogRouter = Router();

blogRouter.get('/', (req, res) => {
    console.log("called api")
    res.send("HELLO WORLD !")
})

blogRouter.post('/add', authVerify, (req,res) => {
    res.status(200).json({ message: 'Add blog post' })
})

export {
    blogRouter
}