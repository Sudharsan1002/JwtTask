const validatetoken= require('../middlewares/authmiddleware')
const Usermodel=require("../model/usermodel")
const userRouter= require("express").Router()


//GET USER DETAILS AFTER VALIDATING TOKEN USING MIDDLEWARE
userRouter.get("/profile", validatetoken, async (req, res) => {
    const userId = req.user.id
    const user = await Usermodel.findById(userId).select("-password")
   if(!user){
    return res.status(400).send({
        message:"User not found"
    })
   }
    res.status(200).send({
        message: "User profile",
        user: user
    })

    
})


module.exports=userRouter