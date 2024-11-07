const express=require ("express")
const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
const { createDbConnection } = require("./db")
const AuthRouter = require("./controller/Authcontroller")   
const userRouter = require("./controller/Usercontroller")

// DOTENV CONFIGURATION
dotenv.config()

// CREATING API SERVER
const API_SERVER=express()


//CONNECTINGH TO MONGODB DATABASE
createDbConnection()

// PARSING THE RESPONSE TO JSON
API_SERVER.use(express.json())

// INJECTING ROUTES
API_SERVER.use("/auth",AuthRouter)
API_SERVER.use("/user", userRouter)
 
// STARTING THE SERVER
 API_SERVER.listen(process.env.PORT,process.env.HOSTNAME,()=>{
    console.log("Server started")
 })
