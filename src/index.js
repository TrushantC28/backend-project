// require('dotenv').config({path : './env'})
import dotenv from "dotenv";
import { app } from "./app.js";
// import mongoose from "mongoose"
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";
dotenv.config(
    {
        path : './env'
    }
)
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Listening on Port :${process.env.PORT} `)
    })
})
.catch((err)=> {
    console.log("Mongo Db connection failed !!!", err)
})
// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     }catch(error){
//         console.error("ERROR : ", error)
//         throw error
//     }
// })()
