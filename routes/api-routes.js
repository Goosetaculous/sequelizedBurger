var db = require("../models")

module.exports =  function(app){
    app.get("/",(req,res)=>{
        db.burger.findAll({})
            .then((dbBurger)=>{
                var hbsObject = {
                    burgers: dbBurger
                }
                res.render("index",hbsObject)
            })
    }),

    app.post("/api/add",(req,res)=>{
        db.burger.create({
            burger_name: req.body.burger
        }).then(()=>{
            res.redirect("/")
        })
    })


}