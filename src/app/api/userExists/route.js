import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export const POST = async (req) => {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    
    return NextResponse.json({message:'User Already Exists', user });
  } catch (error) {
    console.log(error);
  }
};
