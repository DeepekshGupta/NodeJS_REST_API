// handles all products related routes

import express from "express";
const router = express.Router();

router
.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling /GET req to Products"
    })
})
.post("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling /POST req to Products"
    })
})
.patch("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling /PATCH req to Products"
    })
})
.delete("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling /DELETE req to Products"
    })
})



router
.get("/:productId", (req, res, next) => {
    const id = req.params.productId
    if(id == 'special'){
        res.status(200).json({
        message: "Handling /GET req to Products",
        id: id
        }) 
    }
    else{
        res.status(200).json({
            message: "you passes and id"
        })
    }
   
})
.post("/productId", (req, res, next) => {
    const id = req.params.productId
    if(id == 'special'){
        res.status(200).json({
        message: "Handling /GET req to Products",
        id: id
        }) 
    }
    else{
        res.status(200).json({
            message: "you passes and id"
        })
    }
})
.patch("/productId", (req, res, next) => {
    const id = req.params.productId
    if(id == 'special'){
        res.status(200).json({
        message: "Handling /GET req to Products",
        id: id
        }) 
    }
    else{
        res.status(200).json({
            message: "you passes and id"
        })
    }
})
.delete("/productId", (req, res, next) => {
    const id = req.params.productId
    if(id == 'special'){
        res.status(200).json({
        message: "Handling /GET req to Products",
        id: id
        }) 
    }
    else{
        res.status(200).json({
            message: "you passes and id"
        })
    }
})

export default router;