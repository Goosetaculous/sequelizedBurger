var connection =  require("../config/connection")

function printQuestionMarks(num){
    var arr =[]
    for(let i = 0; i< num; i++){
        arr.push("?")
    }
    return arr
}
var orm = {
    selectAll: (tableInput, cb)=>{
        var queryString = `SELECT * FROM ${tableInput};`
        connection.query(queryString, (err,result)=>{
            if(err){
                throw err
            }
            cb(result)
        })
    },
    //vals =  array
    insertOne: (table,col,vals,cb)=>{
        var queryString = `INSERT INTO ${table} (${col}) VALUES(${printQuestionMarks(vals.length)})`
        connection.query(queryString,vals, (err,result)=>{
            if(err){
                throw err
            }
            cb(result)
        })
    },
    updateOne: (table, col, val ,conditionCol ,conditionVal ,cb)=>{
        var queryString = `UPDATE ${table} SET ${col} = ${val} WHERE ${conditionCol} =  ${conditionVal}`
        connection.query(queryString, (err,result)=>{
            if(err){
                throw err
            }
            cb(result)
        })
    }
}
module.exports =  orm