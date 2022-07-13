// handles all orders related routes
import express from "express";
const router = express.Router();

router
.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling /GET req to Orders"
    })
})
.post("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling /POST req to Orders"
    })
})
.patch("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling /PATCH req to Orders"
    })
})
.delete("/", (req, res, next) => {
    res.status(200).json({
        message: "Handling /DELETE req to Orders"
    })
})



router
.get("/:orderId", (req, res, next) => {
    const id = req.params.productId
    if(id == 'special'){
        res.status(200).json({
        message: "Handling /GET req to Orders",
        id: id
        }) 
    }
    else{
        res.status(200).json({
            message: "you passes and id"
        })
    }
   
})
.post("/:orderId", (req, res, next) => {
    const id = req.params.productId
    if(id == 'special'){
        res.status(200).json({
        message: "Handling /GET req to Orders",
        id: id
        }) 
    }
    else{
        res.status(200).json({
            message: "you passes and id"
        })
    }
})
.patch("/:orderId", (req, res, next) => {
    const id = req.params.productId
    if(id == 'special'){
        res.status(200).json({
        message: "Handling /GET req to Orders",
        id: id
        }) 
    }
    else{
        res.status(200).json({
            message: "you passes and id"
        })
    }
})
.delete("/:orderId", (req, res, next) => {
    const id = req.params.productId
    if(id == 'special'){
        res.status(200).json({
        message: "Handling /GET req to Orders",
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