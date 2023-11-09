import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";

export const POST = async (req) => {
  try {
    await connectPrisma();

    const { email } = await req.json();

    const user = await prisma.users.findFirst({
      where: {
        email: email,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json({ message: "User Already Exists", user });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

