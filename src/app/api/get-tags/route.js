import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";
import { getSession, useSession } from "next-auth/react";



export const GET = async (req,res) => {

    // TODO Remove hardcoded id value

    const session = getSession()

  try {
    // Check if the user is authenticated
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Get User ID from session
    const userId = session?.user?.id

    await connectPrisma();
    const allTags = await prisma.users.findUnique({
      where: {
        id: '654df0ba50e6573989cdd289',
      },
      include: {
        userTags: true,
        _count: true,
      },
    });

    return NextResponse.json({ allTags }, { status: 200 });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
