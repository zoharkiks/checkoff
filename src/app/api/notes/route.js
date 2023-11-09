import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";

export const POST = async (req) => {
  try {
    const { taskName, taskDescription, userId } = await req.json();

    if (!taskName || !taskDescription || !userId) {
      return NextResponse.json(
        { message: "Invalid Data" },
        { status: "400" }
      );
    }

    await connectPrisma();

    const user = await prisma.users.findFirst({
      where:{
        id:userId
      }
    })

    if (!user) {
      return NextResponse.json(
        { message: "Invalid User" },
        { status: "404" }
      );
    }

    await prisma.notes.create({
      data: {
        taskName: taskName,
        taskDescription: taskDescription,
        userId: userId,
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

export const GET = async (req) => {
  try {
    await connectPrisma();
    const users = await prisma.users.findMany({
      include: {
        notes: true,
        _count: true,
      },
    });

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
