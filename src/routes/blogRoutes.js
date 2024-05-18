import { Router } from "express";

const blogRouter = Router();

blogRouter.get('/', (req, res) => {
    console.log("called api")
    res.send("HELLO WORLD !")
})

export {
    blogRouter
}