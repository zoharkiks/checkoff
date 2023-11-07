import mongoose, { Schema, models } from "mongoose";

const noteSchema = new Schema(
  {
    taskName: {
      type: String,
      required: true,
    },

    taskDescription: {
      type: String,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
    },
  },

  { timestamps: true }
);

const Note = models.Note || mongoose.model("Note", noteSchema);

export default Note;
