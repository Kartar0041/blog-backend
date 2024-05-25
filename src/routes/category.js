import { Router } from "express";
import { Category } from "../model/category.js";

const categoryRouter = Router();

categoryRouter.post('/createcategory', async (req, res) => {
    try {
        const { title,parentId } = req.body;

        console.log("Category title:", title);
        if (!title) {
            return res.status(400).send({
                message: "Title is required"
            });
        }      
        const categoryPost = await Category.create({ title,parentId })
        console.log("categoryPost >>", categoryPost)

        return res.status(200).send({
            message: "Category is created",
            data: categoryPost
        });
    } catch (error) {
        console.log("errr",error.code)
        if(error.code === 11000){
            console.log("sadasd")
            return res.status(400).send({
                statusCode: 400,
                message: "category alerady exists"
            })
        }
        res.status(500).send({
            message: "Internal server error",
            error: error
        });
    }
});

export {
    categoryRouter
}
