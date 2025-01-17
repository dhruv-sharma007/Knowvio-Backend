import mongoose from "mongoose";
import { DB_NAME } from "../constants.js" 

const connectDB = async () => {
    try {
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`Mongodb Connected !!! DB Host ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log(`MongoDB Not Connected ERROR: ${error}`)
        process.exit(1)
    }
}