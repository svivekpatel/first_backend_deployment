const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    title:String,
    body:String,
    subject:String,
    userId:String,
},{
    versionKey:false
})

const noteModel = mongoose.model("note",userSchema)


module.exports = {
    noteModel
}