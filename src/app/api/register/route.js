import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";


export const POST = async (req) => {
  try {
    const {email, password} = await req.json()
    const hashedPassword = await bcrypt.hash(password,10)

    await connectMongoDB()
    await User.create({email, password:hashedPassword})


  return NextResponse.json({message:'User Registered'},{status:'200'})
  } catch (error) {
    return NextResponse.json({message:"An error occurred"},{status:'500'})
  }
}