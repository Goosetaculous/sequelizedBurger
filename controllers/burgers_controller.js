var express = require("express")
var burger = require("../models/burger")
var router =  express.Router()


router.get("/",(req,res)=>{
    burger.all((data)=>{
        var hbsObject = {
            burgers: data
        }
        res.render("index",hbsObject)
    })
})

router.post("/api/add",(req,res)=>{
    burger.create(
        "burger_name",[req.body.burger]
    ,()=>{
        res.redirect("/")
    })
})

router.put("/api/:id",(req,res)=>{
    let col =  Object.keys(req.body)[0]
    let val = req.body[col]
    burger.update(
        col,val,"id",req.params.id
        ,()=>{
            res.redirect("/")
        })
})

module.exports = router;