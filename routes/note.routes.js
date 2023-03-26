const express = require("express")
const { noteModel } = require("../model/note.model")
const noteRuoter = express.Router()

noteRuoter.get("/",async(req,res)=>{
    try {
        const note = await noteModel.find()
        res.status(200).send(note)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

noteRuoter.post("/add",async(req,res)=>{
    try {
        const note = new noteModel(req.body)
        await note.save()
        res.status(200).send({msg:"Note has been added"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

noteRuoter.patch("/update/:id",async(req,res)=>{
    const payload = req.body
    const {id} = req.params
    try {
        await noteModel.findByIdAndUpdate({_id:id},payload)
        res.status(200).send({msg:"Note has been updated"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

noteRuoter.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
    try {
        await noteModel.findByIdAndDelete({_id:id})
        res.status(200).send({msg:"Note has been deleted"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})


module.exports = {
    noteRuoter
}
