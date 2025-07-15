import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.host}:`
        console.log(`mongoDB conectado en ${url}`)

    }
    catch (error) {
        console.log(error.message);
            process.exit(1)
        
    }
}