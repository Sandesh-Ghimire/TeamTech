const mongoose = require("mongoose");

const connectDB = (uri) => {
    return mongoose.connect(uri,{
        dbName:"ParkSpace"
    }).then(() => {
        console.log("connected to db")
    })
}

module.exports = connectDB;

