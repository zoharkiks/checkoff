// Connect MongoDb
import mongoose from "mongoose";
import prisma from "../prisma";


export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('yaay mongo');
    } catch (error) {
        console.log(error);
    }
}

export const connectPrisma = async()=>{
    try {
        await prisma.$connect()
        console.log('prisma is working fine');
    } catch (error) {
        console.log(error);
    }
}