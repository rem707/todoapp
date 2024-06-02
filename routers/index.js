const router=require("express").Router()
const Todo = require('../models/todo');


//router will be here

router.get("/",async function(req,res){
    const allTodo=await Todo.find();



    res.render("index",{todo:allTodo})
})



module.exports=router;