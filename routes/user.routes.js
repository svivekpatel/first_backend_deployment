const express = require("express")
const userRouter = express.Router()
const {userModel} = require("../model/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


//register
userRouter.post("/register",async(req,res)=>{
    const {email,password,location,age} = req.body
    try {
        bcrypt.hash(password, 5, async(err, hash) => {
            const user = new userModel({email,password:hash,location,age})
            await user.save()
            res.status(200).send({"msg":"registeration successful!"})
        });
    } catch (error) {
        res.status(200).send({"msg":error.message})
    }
})

//login
userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})
        console.log(user)
        bcrypt.compare(password, user.password, function(err, result) {
            if(result){
                res.status(200).send({"msg":"Login successful!","token":jwt.sign({ "userId": user._id }, 'shhhhh')})
            }else{
                res.status(400).send({"msg":"Login failed!"})
            }
        });
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})


// userRouter.get("/userdetails",(req,res)=>{
//     // const {token} = req.query
//     const token = req.headers.authorization
//     jwt.verify(token, 'shhhhh', (err, decoded) => {
//         decoded?res.status(200).send("User Details"):res.status(400).send({msg:err.message})
//       });
    
// })



module.exports = {
    userRouter
}


