const notFound = (req,res) => {
    return res.json({
        err:"Route is not available."
    })
}

module.exports = notFound