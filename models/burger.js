var orm =  require("../config/orm.js")
var table = "burgers"

var burgers= {
    all: (cb)=>{
        orm.selectAll(table,(res)=>{
            cb(res)
        })
    },
    create: (col,val,cb)=>{
        orm.insertOne(table,col,val,(res)=>{
            cb(res)
        })
    },
    update: (col,val,condCol,condVal,cb)=>{
        orm.updateOne(table,col,val,condCol,condVal,(res)=>{
            cb(res)
        })
    }
}
module.exports=burgers
