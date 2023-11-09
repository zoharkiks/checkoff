import prisma from "../../../prisma";




export const connectPrisma = async()=>{
    try {
        await prisma.$connect()
        console.log('prisma is working fine');
    } catch (error) {
        console.log(error);
    }
}