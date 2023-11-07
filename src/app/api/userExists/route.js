import { NextResponse } from "next/server";
import { connectMongoDB, connectPrisma } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import prisma from "../../../../prisma";

export const POST = async (req) => {
  try {
    await connectPrisma();

    const { email } = await req.json();

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json({ message: "User Already Exists",user });
  } catch (error) {
    console.log(error);
  }
};
