const mongoose= require("mongoose")
const bcrypt= require("bcryptjs")
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})


//HASHING PASSWORD USING BCRYPT
UserSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password, 10)
    }
    next()
})

const Usermodel=mongoose.model("Users",UserSchema)
 
module.exports=Usermodel