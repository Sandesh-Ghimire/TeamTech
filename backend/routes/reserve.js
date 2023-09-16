const express = require('express')
const router = express.Router()

const {isAdmin,isSignedIn,isAuthenticated} = require('../controller/auth')
const {getUserById,pushToReservation} = require('../controller/user')
const {getReservationById,createReservation,updateStatus,getOrderStatus} = require('../controller/reserve')
const {updateParking} = require('../controller/space')

//params
router.param("userId",getUserById)
router.param("reservationId",getReservationById)

//
router.post("/reservation/create/:userId",isSignedIn,isAuthenticated,pushToReservation,updateParking,createReservation)
// router.get("/reservation/all/:userId",isSignedIn,isAuthenticated.apply,isAdmin,getAllOrders)


//status of order
// router.get("/reservation/status/:userId",isSignedIn,isAuthenticated,isAdmin,getOrderStatus)
router.put("/reservation/status/:orderId/status/:userId",isSignedIn,isAuthenticated,isAdmin,updateStatus)

module.exports = router