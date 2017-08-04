var db = require("../models")

function addCustomer(customerName, bgId){
    db.customer.findOrCreate({
        where: { customer_name:customerName  }
    }).then((data)=>{
        console.log("data: ",data)
    })
}

module.exports =  function(app){
    app.get("/",(req,res)=>{
        db.burger.findAll({
            order: ["burger_name" ]
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
        var customerName =  req.body.customer
        db.burger.update(
            {devoured: req.body.devoured},
            {where: {id: req.params.id}}
        ).then(()=>{
            addCustomer(customerName,req.params.id)

            res.redirect("/")
        }).catch((e)=>{
            console.log("e ",e)
        })
    })


}