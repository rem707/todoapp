const express=require("express")
const mongoose=require("mongoose")
const app =express()

//connection to mongodb

mongoose.connect("mongodb://127.0.0.1:27017", {dbName:"todo_express",})
.then(()=> console.log("database connected"))
.catch((e)=>console.log(e));

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine","ejs")


//routs
app.use(require("./routers/index.js"))
app.use(require("./routers/todo.js"))



//server configuration
app.listen(3000,function(){
    console.log("server started listensing on port:3000")
})