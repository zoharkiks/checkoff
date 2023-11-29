import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";

export const PATCH = async (req, res) => {
  try {
    const { noteId, favorite } = await req.json();

    // Update the note in the database based on the noteId and favurite flag
    await connectPrisma();

    const updatedNote = await prisma.notes.update({
      where: {
        id: noteId,
      },
      data: {
        isFavorite: favorite,
      },
    });

    return NextResponse.json(
      { message: "Note updated successfully", updatedNote },
      { status: "200" }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while updating the note", error },
      { status: "500" }
    );
  } finally {
    await prisma.$disconnect();
  }
};
