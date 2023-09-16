const User = require('./../models/user')
const Reserve = require('./../models/reserve')

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

const pushToReservation = async (req,res,next) => {
    const {user,location,locality,EV,two_wheeler,four_wheeler} = req.body.reservation
    if(!location || !locality){
        return res.json({
            err:"Provide both location and locality"
        })
    }
    if(EV===0 && two_wheeler==0 && four_wheeler===0){
        return res.json({
            err:"Please make te reservation"
        })
    }
    
    await Reserve.create(req.body.reservation)

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
    pushToReservation
}