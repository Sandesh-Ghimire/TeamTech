const Space = require('../models/space')
const formidable = require('formidable');


const getSpaceById = async(req,res,next,id) => {
    const parkingSpace = await Space.findById(id).populate('user')
    if(!parkingSpace){
        return res.json({
            err:"No product found"
        })
    }
    req.space = parkingSpace
    next()
}

const createSpace = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true

     form.parse(req,async(err,fields,file) => {
         if(err){
            console.log(err,"formidable err")
            return res.status(400).json({
                err:"Error in uploading"
            })
        }

        //restrictions on field
        console.log(fields)
        const {location,two_wheeler,four_wheeler,EV,user} = fields

        const newField = {
            location:location[0],
            two_wheeler:Number(two_wheeler[0]),
            four_wheeler:Number(four_wheeler[0]),
            EV:Number(EV[0]),
            user:user[0]
        }

        if(!location || !two_wheeler || !four_wheeler || !EV || !user){
            return res.json({
                err:"All fields required"
            })
        }

        console.log(two_wheeler[0],"sjasjkah")
        console.log(location,"sjasjkah")

        // let space = new Space(newField)

        // //save to db
        await Space.create(newField)
        res.json({
            msg:"Space created successfully!"
        })
    })
}
/////



const getAllSpaces = async (req,res)=>{

    const limit =  Number(req.query.limit) || 8

    let spaces = Space.find({}).limit(limit)

    if(req.query.sortBy){
        const sortList = req.query.sortBy.split(',').join(' ')
        product = product.sort(sortList)
    }else{
        spaces = spaces.sort({_id:-1})
    }

    spaces = spaces.populate('user')
    const result = await spaces
    
    if(!result){
        return res.json({
            err:"No Spaces found"
        })
    }
    return res.json(result)
}

//
const updateParking = async (req,res,next) => {
    let EV_no = req.body.reservation.EV
    let four_wheeler_no = req.body.reservation.four_wheeler
    let two_wheeler_no = req.body.reservation.two_wheeler

    console.log(req.body.reservation)

    const space_id = req.body.reservation.location
    const parkingSpace = await Space.findById(space_id)

    parkingSpace.EV = parkingSpace.EV - EV_no
    parkingSpace.four_wheeler = parkingSpace.four_wheeler - four_wheeler_no
    parkingSpace.two_wheeler = parkingSpace.two_wheeler - two_wheeler_no

    if (parkingSpace.EV < 0 || parkingSpace.four_wheeler < 0 || parkingSpace.two_wheeler < 0) {
        return res.json({
            err:"Parking limit exceeded."
        })
    }

    await parkingSpace.save()

    next()
}
module.exports = {
    getSpaceById,
    createSpace,
    getAllSpaces,
    updateParking
}