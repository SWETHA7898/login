const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())
var uname="swetha"
var pass=123

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.post("/login",(req,res)=>{
    console.log(req.body)
    if(uname===req.body.username && pass==req.body.password){
        res.send(true)
    }
    else{
        res.send(false)
    }
})



app.listen(3000,()=>{
    console.log("Server started...")
   
    
})