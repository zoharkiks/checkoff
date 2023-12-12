import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";
import { getSession, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
export const dynamic = 'force-dynamic';

/**
 * Retrieves the user's notes from the database and returns them as a JSON response.
 * If the user is not authenticated, returns an unauthorized status.
 */
export const GET = async (req, res) => {
  try {
    // Authenticate the user
    const session = await getServerSession(authOptions);

    if (!session) {
      // Return unauthorized status if user is not authenticated
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = session?.user?.id;
    await connectPrisma();

    //  // Extract the query parameter
    const url = new URL(req.url);
    const status = url.searchParams.get("status");
    const isFinished = status === "finished";

    // Retrieve the user's notes from the database
    const usersWithNotes = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      include: {
        notes: {
          where: status
            ? {
                isFinished: isFinished,
              }
            : {},
          orderBy: {
            createdAt: "desc",
          },
        },
        _count: true,
      },
    });

    // Return the user's notes as a JSON response
    return NextResponse.json(
      { message: "Notes retrieved", usersWithNotes },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  } finally {
    // Disconnect from the database
    await prisma.$disconnect();
  }
};
