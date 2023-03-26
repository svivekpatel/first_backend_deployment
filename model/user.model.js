const mongoose = require("mongoose")

//user schema
const userSchema = mongoose.Schema({
    email:String,
    password:String,
    location:String,
    age:Number,
},{
    versionKey:false
})

//user model
const userModel = mongoose.model("user",userSchema)



//export model
module.exports = {
    userModel
}
