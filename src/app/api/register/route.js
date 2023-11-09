import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);


    await connectPrisma();
    const user = await prisma.users.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "User Registered",user }, { status: "200" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred" },
      { status: "500" }
    );
  }
  finally{
    await prisma.$disconnect()
  }
};
