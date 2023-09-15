const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    role:{
        type:Number,
        default:2,
        required:[true,'Provide the role.']
    },
    username:{
        type:String,
        required:[true,"Provide the username."],
        maxlength:20
    },
    email:{
        type:String,
        required:[true,"Provide the email."],
        unique:[true,"Please provide the unique email."],
        trim:true
    },
    password:{
        typr:String,
        required:[true,"Provide the password."],
        trim:true,
        maxlength:20
    }
})

module.exports = mongoose.model("User",userSchema)