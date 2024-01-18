import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";

export const POST = async (req) => {
  try {
    const { tagName, userId } = await req.json();

    if (!tagName) {
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

    await prisma.userTag.create({
      data: {
        tagName: tagName,
        userId: userId,
      },
    });

    return NextResponse.json(
      { message: "Tag Created Successfully" },
      { status: "200" }
    );
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { message: "An error occurred creating your Tag", error },
      { status: "500" }
    );
  } finally {
    await prisma.$disconnect();
  }
};
