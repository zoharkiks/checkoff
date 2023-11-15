import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";
import { useSession } from "next-auth/react";


export const POST = async (req) => {
  try {
    const { taskName, taskDescription, userId, priority,selectedTags } = await req.json();

    if (!taskName || !taskDescription || !userId) {
      return NextResponse.json({ message: "Invalid Data" }, { status: "400" });
    }

    await connectPrisma();

    const user = await prisma.users.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "Invalid User" }, { status: "404" });
    }

    await prisma.notes.create({
      data: {
        taskName: taskName,
        taskDescription: taskDescription,
        priority:priority,
        tags:selectedTags,
        userId:userId
      },
    });

    return NextResponse.json(
      { message: "Note Created Successfully" },
      { status: "200" }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred creating your Note", error },
      { status: "500" }
    );
  } finally {
    await prisma.$disconnect();
  }
};
