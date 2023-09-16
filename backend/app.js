require('express-async-errors');
require('dotenv').config()

const express = require("express")
const app = express()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const connectDB = require('./connect')
const errorHandler = require('./error-handler/error.js')
const notFound = require('./error-handler/notfound.js')

//Middlewares
// app.use(bodyParser.json())


//My Routes
const authRoutes = require('./routes/auth')
const spaceRoutes = require('./routes/space')
const reserveRoutes = require('./routes/reserve')

app.use('/parkspace',authRoutes)
app.use('/parkspace',spaceRoutes)
app.use('/parkspace',reserveRoutes)

app.use(notFound)
app.use(errorHandler)


//Server
const port = process.env.PORT || 9000
const uri = process.env.MONGO_URI

const start = async () => {
    try {
        await connectDB(uri)
        app.listen(port,console.log(`Listening to the port:${port}`))
    } catch (error) {
        console.log(error.message) 
        return JSON({error:error.message})
    }
}

start()
