import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export const POST = async (req) => {
  try {
    const {email, password} = await req.json()

    console.log(email,password);

  return NextResponse.json({message:'User Registered'},{status:'200'})
  } catch (error) {
    return NextResponse.json({message:"An error occurred"},{status:'500'})
  }
}