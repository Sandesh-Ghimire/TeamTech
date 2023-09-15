const express = require('express')
const router = express.Router()

const {isAdmin,isSignedIn,isAuthenticated} = require('../controller/auth')
const {getSpaceById,createSpace,getAllSpaces} = require('../controller/space')
const {getUserById} = require('../controller/user')


router.param("spaceId",getSpaceById)
router.param("userId",getUserById)


//
// router.get('/parking-space/:spaceId',getProduct)
router.post('/parking-space/create/:userId',isSignedIn,isAuthenticated,isAdmin,createSpace)

//listing route for homepage
router.get('/spaces',getAllSpaces)

module.exports = router