const errorHandler = (err,req,res,next) => {
    if(err){
        if (err.name === "UnauthorizedError") {
            return res.status(401).json({
                err:"You aren't authorized to access this route",
                name:err.name
            })
          }
        if(err.name==='CastError'){
            return res.status(401).json({
                err:"Problem in operating your request",
                name:err.name
            })       
        }
        if(err.name==='MongoServerError'){
            return res.json({
                err:"Problem in the server",
                name:err.name
            })  
        }
        console.log(err.message)
        console.log(err.name)
        console.log(err)
        res.json({err:err.message})
    }
    next()
}

module.exports = errorHandler