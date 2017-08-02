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
    })


}