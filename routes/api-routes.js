var db = require("../models")

module.exports =  function(app){
    app.get("/",(req,res)=>{
        db.burger.findAll({
            order: ["burger_name", 'ASC' ]
        })
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
    }),

    app.put("/api/:id", (req,res)=>{
        let col = Object.keys(req.body)[0]
        let val = req.body[col]
        db.burger.update(
            {devoured: val},
            {where: {id: req.params.id}}
        ).then(()=>{
            console.log("SUCCESs")
            res.redirect("/")
        }).catch((e)=>{
            console.log("e ",e)
        })
    })


}