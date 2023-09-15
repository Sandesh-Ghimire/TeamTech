const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema

const reserveSchema = new mongoose.Schema({
    user:{
        type:ObjectId,
        ref:"User"
    },
    location:{
        type:ObjectId,
        ref:"Space"
    },
    EV:{
        type:Number,
        required:[true,"Provide the size for EV"]
    },
    four_wheeler:{
        type:Number,
        required:[true,"Provide the size for 4 wheeler"]
    },
    two_wheeler:{
        type:Number,
        required:[true,"Provide the size for 2 wheeler"]
    }
})

module.exports = mongoose.model("Reserve",reserveSchema)