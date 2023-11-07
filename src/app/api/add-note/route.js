import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import Note from "../../../../models/note";
import User from "../../../../models/user";

export const POST = async (req) => {
  try {
    const { taskName, taskDescription } = await req.json();
    await connectMongoDB();
    await Note.create({taskName, taskDescription});

    return NextResponse.json(
        { message: "Note Created Successfully" },
        { status: "200" }
      );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred creating your Note" },
      { status: "500" }
    );
  }
};
