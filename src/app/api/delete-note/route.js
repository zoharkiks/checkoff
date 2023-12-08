import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { connectPrisma } from "@/app/utils";
import { useSession } from "next-auth/react";

export const DELETE = async (req) => {
  try {
    const { noteId } = await req.json();

    if (!noteId) {
      return NextResponse.json(
        { message: "Note ID is required" },
        { status: "400" }
      );
    }

    await connectPrisma();

    // Check if the note exists before attempting to delete it
    const existingNote = await prisma.notes.findUnique({
        where: {
          id: noteId,
        },
      });
  
      if (!existingNote) {
        return NextResponse.json(
          { message: "Record to delete does not exist" },
          { status: "404" }
        );
      }

    const deletedNote = await prisma.notes.delete({
      where: {
        id: noteId,
      },
    });

    return NextResponse.json(
      { message: "Note deleted successfully", deletedNote },
      { status: "200" }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred deleting your Note", error },
      { status: "500" }
    );
  } finally {
    await prisma.$disconnect();
  }
};
