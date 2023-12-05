import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";

export const PATCH = async (req) => {
  try {
    const { noteId, finished } = await req.json();
    // Update the note in the database based on the noteId and finished flag
    await connectPrisma();

    const updatedNote = await prisma.notes.update({
      where: {
        id: noteId,
      },
      data: {
        isFinished: finished,
      },
    });

    return NextResponse.json(
      { message: "Note marked as finished successfully", updatedNote },
      { status: "200" }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while marking as finished", error },
      { status: "500" }

    )
  } finally{
    await prisma.$disconnect()
  }
};
