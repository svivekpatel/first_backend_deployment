const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    const token = req.headers.authorization
    if(token){
        const decoded = jwt.verify(token, 'shhhhh');
        if(decoded){
            console.log(decoded)
            req.body.userId = decoded.userId
            next()
        }else{
            res.status(400).send({msg:"please login first!"})
        }
    }else{
            res.status(400).send({msg:"please login first!"})
    }
}


module.exports = {
    auth
}