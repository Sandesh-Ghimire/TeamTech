const Reserve = require("../models/reserve")

exports.getReservationById = async (req,res,next,id) => {
    const reservation = await Reserve.findById(id).populate("location",)
    if(!reservation){
        return res.json({
            err:"No reservation found."
        })
    }
    req.reserve = reservation;
    next()
}


exports.createReservation = async (req,res) => {
    req.body.reservation.user = req.profile;
    console.log("reservation ---",req.body.reservation)
    const reservation = await Reserve.create(req.body.reservation)
    
    return res.json(reservation)
}

// exports.getAllOrders = async (req,res) => {
//     const orders = await Order.find({}).populate("user","_id name")
//     if(!orders){
//         return res.json({
//             err:"No Orders yet"
//         })
//     }

//     return res.json(orders)
// }

exports.getReserveStatus = (req,res) => {
    res.json(Reserve.schema.path("status").enumValues)
}

exports.updateStatus = async (req,res) => {
    const reserve = await Reserve.updateOne({_id:req.reserve.id},{status:req.body.status},{new:true})
    if(!reserve){
        return res.json({
            err:"Updation failed"
        })
    }
    return res.json(reserve)
}