// Connect MongoDb
import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('yaay mongo');
    } catch (error) {
        console.log(error);
    }
}