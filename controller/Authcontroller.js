const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const Usermodel=require("../model/usermodel")
const AuthRouter= require("express").Router()

// LOGIN ROUTE WITH JWT TOKEN GENERATION AND VALIDATING PASSWORD USING BCRYPT
AuthRouter.post("/login",async (req,res)=>{
    const {email, password}=req.body
    const user=await Usermodel.findOne({email})
    if(!user){
        return res.status(400).send({
            message:"User not found"
        })
    }
   const isPasswordValid=await bcrypt.compare(password, user.password)
   if(!isPasswordValid){
    return res.status(400).send({
        message:"Invalid password"
    })
   }
   const token=jwt.sign({id:user._id,name:user.name}, process.env.SECRET_KEY,{expiresIn:"1h"})
   res.status(200).send({
    message:"Login successful",
    token:token
   })

        
   
})
// SIGNUP ROUTE

AuthRouter.post("/signup",async(req,res)=>{
   try {
    const user=new Usermodel(req.body)
    const result=await user.save()
    console.log(result)
    res.status(200).send({
        message:"User created successfully",
        
    })
   } catch (error) {
    res.status(400).send({
        message:"something went wrong",
        error:error.message

        
   })
}
 
})


module.exports=AuthRouter