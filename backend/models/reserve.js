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
    locality:{
        type:String,
        required:[true,"Please provide the locality"]
    },
    EV:{
        type:Number,
        default:0,
        required:[true,"Provide the size for EV"]
    },
    four_wheeler:{
        type:Number,
        default:0,
        required:[true,"Provide the size for 4 wheeler"]
    },
    two_wheeler:{
        type:Number,
        default:0,
        required:[true,"Provide the size for 2 wheeler"]
    },
    status:{
        type:String,
        default:"Reserved",
        enum:["Cancelled","Occupied","Reserved"]
    },
})

module.exports = mongoose.model("Reserve",reserveSchema)