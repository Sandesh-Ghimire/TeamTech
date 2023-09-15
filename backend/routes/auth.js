const express = require('express')
const authRoutes = express.Router()
const { check } = require('express-validator');


const {signin,signup,signout,isSignedIn} = require('./../controller/auth')

authRoutes.post('/signin',
    check('email',"Enter the valid email").isEmail(),
    check('password',"Password should be 8 charactrs long").isLength({min:8})
    ,signin)
authRoutes.post('/signup',
    check('username',"Name should be 3 characters long").isLength({min:3}),
    check('email',"Enter the valid email").isEmail(),
    check('password',"Password should be 8 charactrs long").isLength({min:8})
    ,signup)
authRoutes.get('/signout',signout)


module.exports = authRoutes;
