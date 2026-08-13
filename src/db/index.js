import mongoose from "mongoose";

import { DB_NAME } from "../constants";

const connectDB = async () =>{
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("MongoDB connected\n")
        console.log(connection)

    }catch(error){
        console.log("Error : ", error)
        process.exit(1)
    }
}

export default connectDB