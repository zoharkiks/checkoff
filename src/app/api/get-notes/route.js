import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";
import { getSession, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";



export const GET = async () => {

 
  const session = await getServerSession(authOptions)


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
        id: userId,
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
