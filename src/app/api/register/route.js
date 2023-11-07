import { NextResponse } from "next/server";
import {connectPrisma } from "../../../../lib/mongodb";
import bcrypt from "bcryptjs";
import prisma from "../../../../prisma";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);


    await connectPrisma();
    await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "User Registered" }, { status: "200" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred" },
      { status: "500" }
    );
  }
};
