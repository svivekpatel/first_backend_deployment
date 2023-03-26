const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { auth } = require("./middlewares/auth.middleware")
const { noteRuoter } = require("./routes/note.routes")
const { userRouter } = require("./routes/user.routes")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.use("/users",userRouter)
app.use(auth)
app.use("/notes",noteRuoter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to mongo")
    } catch (error) {
        console.log("not able to connect to mongo")
        console.log({msg:error.message})
    }
    console.log("server is running in port 8080")
})