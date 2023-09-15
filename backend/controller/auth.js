const User = require('./../models/user')
const {check,validationResult} = require('express-validator')
var jwt = require('jsonwebtoken');
var {expressjwt} = require("express-jwt");

const signin = async (req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            err:errors.array()[0].msg
        })      
    }

    const {email,password} = req.body;

    const user = await User.findOne({email})

    if(!user){
        return res.status(400).json({
            err:"User email doesn't exist"
        })
    }

    if(password != user.password){
        return res.status(401).json({
            err:"Email and password donot match"
        })
    }

    const token = jwt.sign({_id:user._id},process.env.SECRET)
    //put token in cookie
    res.cookie("token",token,{expire:new Date() +9999})

    const {_id,username,role} = user
    return res.json({
        user:{
            _id,username,email,role
        }
    })

}

const signup = async (req,res) => {

    const errors = validationResult(req)

    console.log("request:",req.body)

    if(!errors.isEmpty()){
        console.log(errors.array()[0].msg)
        return res.status(422).json({
            err:errors.array()[0].msg
        })
    }

    const user = await User.create(req.body)
    console.log(user)
    res.json({
        name:user.name,
        email:user.email,
        id:user._id
    })
}

const signout =  (req,res) => {
    res.clearCookie("token")
   res.json({
       message:"User signout successfully"
   })

}

// protected routes
const isSignedIn = expressjwt({
    secret:process.env.SECRET,
    userProperty: "auth",    // set properties on user Browser. Works on request
    algorithms: ["HS256"]
})

//custom middlewares
const isAuthenticated = (req,res,next) => {
    let checker = req.profile && req.auth  && req.profile._id == req.auth._id   //req.profile is set from front-end

    if(!checker){
        return res.status(403).json({
            err:"ACCESS DENIED"
        })
    }

    next()
}

const isAdmin = (req,res,next) => {
    if(req.profile.role !== 0){
        return res.status(403).json({
            err:"You arenot Admin. ACCESS DENIED"
        })
    }
    next()
}
module.exports = {signin,signup,signout,isSignedIn,isAuthenticated,isAdmin}