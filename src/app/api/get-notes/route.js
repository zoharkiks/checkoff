import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";
import { getSession, useSession } from "next-auth/react";



export const GET = async (req) => {

  const session = getSession()
  try {
    // Check if the user is authenticated
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Get User ID from session
    const userId = session?.user?.id
    await connectPrisma();
    const usersWithNotes = await prisma.users.findUnique({
      where: {
        id: '655390a626a60577df2201cb',
      },
      include: {
        notes: true,
        _count: true,
      },
    });

    return NextResponse.json({ usersWithNotes }, { status: 200 });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
