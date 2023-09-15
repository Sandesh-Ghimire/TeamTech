const User = require('./../models/user')
// const Order = require('../models/order')


const getUserById = async (req,res,next,id) => {
    const user = await User.findById(id)

    if(!user){
        return res.status(400).json({
            err:"No user found"
        })
    }

    req.profile = user;
    next()

}


const getUser = (req,res) => {

    req.profile.salt = undefined
    req.profile.encry_password = undefined
    req.profile.createdAt = undefined
    req.profile.updatedAt = undefined

    return res.json(req.profile)
}




module.exports = {
    getUser,
    getUserById,
}