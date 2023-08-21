const mongoose = require("mongoose");


const db = {
    connect:()=>{
        mongoose.connect("mongodb://127.0.0.1:27017/crud")
        .then(()=>{
            console.log("Databse connected")
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

module.exports = db