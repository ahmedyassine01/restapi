const express=require("express");
require('dotenv').config({path:'./config/.env'})
const connectDb=require("./config/ConnectDb")
const User=require("./model/user")
const app=express();
connectDb()
app.use(express.json());
//add new user
app.post("/add",async(req,res)=>{
    const{fullName,email,phone}=req.body
    try {
        const newUser=User({
            fullName,email,phone
        });
        await newUser.save();
        res.send(newUser)
    } catch (error) {
        console.log(error.message)
    }
});
//get all users
app.get("/get",async(req,res)=>{
    try {
        const users=await User.find();
        res.send(users)
    } catch (error) {
        console.log(error.message)
        
    }
});
//delete a user 
app.delete("/user/delete/:id",async(req,res)=>{
    try {
        const deletedUser=await User.findByIdAndDelete(req.params.id);
        res.send("usergone,byeeeee")
    } catch (error) {
        console.log(error.message)
        
    }
});
//update user info
app.put("/user/edit/:id",async(req,res)=>{
    try {
        const editeduser=await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(editeduser)
    } catch (error) {
        console.log(error.message)
        
    }
});
app.get("/getid/:id",async(req,res)=>{
    try {
        const theUser=await User.findById(req.params.id);
        res.send(theUser)
    } catch (error) {
        console.log(error.message)
        
    }
})
const PORT=process.env.PORT||6000;
app.listen(PORT, (err)=>
 err
?console.log(err)
: console.log('server is sucessfully running on PORT ${PORT}')
);