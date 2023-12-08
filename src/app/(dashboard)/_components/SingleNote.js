import { Icon } from "@iconify/react";
import { formatUserDate } from "@/app/utils/formatUserDate";
import { getColorForPriority } from "@/app/utils/getColorForPriority";

import React from "react";
import { useAddNotesStore, useLoadingStore, useUserStore } from "../../store";
import { handleDeleteNote } from "@/app/utils/fetchUtils";

// TODO Add edit
// TODO Add toast notifications

const SingleNote = ({
  taskTitle,
  taskDesc,
  selectedTags,
  selectedPriority,
  dueDate,
  id,
  favorite,
  isCompleted,
}) => {
  const formattedDate = formatUserDate(dueDate);
  const priorityColorClass = getColorForPriority(selectedPriority);

  // Accessing Zustand State
  const [toggleFavorite, setNotes, markNoteComplete] = useUserStore((state) => [
    state.toggleFavorite,
    state.setNotes,
    state.markNoteComplete,
  ]);

  const [isLoading, setIsLoading] = useLoadingStore((state) => [
    state.isLoading,
    state.setIsLoading,
  ]);

  const handleFavoriteToggle = async () => {
    // Use the 'toggleFavorite' function from the store and pass the note ID
    toggleFavorite(id);

    try {
      const response = await fetch("/api/update-favorite", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          noteId: id,
          favorite: !favorite, // or false, depending on the desired state
        }),
      });
    } catch (error) {
      console.error("An error occurred while updating the note:", error);
    }
  };

  const handleFinishedToggle = async () => {
    markNoteComplete(id)
    try {
      const response = await fetch("/api/mark-finished", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          noteId: id,
          finished: true, // or false, depending on the desired state
        }),
      });
      
    } catch (error) {
      console.error(
        "An error occurred while marking the note as finished:",
        error
      );
    }
  };

  return (
    <div className="flex flex-col justify-center h-full space-y-4 dark:text-white text-text-primary rounded-xl padding bg-accent-secondary ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon
            onClick={handleFavoriteToggle}
            className={`text-2xl cursor-pointer ${favorite && "text-red-500"}`}
            icon={
              favorite
                ? "material-symbols:favorite"
                : "material-symbols:favorite-outline"
            }
          />
          <span className="mt-1 text-sm font-semibold">{formattedDate}</span>
        </div>

        {isCompleted ? (
          <Icon
            onClick={()=>handleDeleteNote(id)}
            className="transition-colors cursor-pointer hover:text-green-600"
            width={25}
            icon={"fluent:delete-24-regular"}
          />
        ) : (
          <Icon
            onClick={handleFinishedToggle}
            className="transition-colors cursor-pointer hover:text-green-600"
            width={25}
            icon={"fluent-mdl2:completed-solid"}
          />
        )}
      </div>

      <h4 className="text-3xl font-bold capitalize ">{taskTitle}</h4>

      <h5 className="text-xl font-bold capitalize ">{taskDesc}</h5>

      {selectedTags.length > 0 ? (
        selectedTags.map((tag) => (
          <div className="px-2 bg-red-300 rounded-xl w-min text-text-primary">
            {tag}
          </div>
        ))
      ) : (
        <span>No tags</span>
      )}

      {selectedPriority && (
        <div className={`${priorityColorClass} p-2 w-max rounded`}>
          {selectedPriority}
        </div>
      )}

      <div className="flex justify-end">
        {/* <span>07:30 AM to 9:30 AM</span> */}

        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-primary">
          pp
        </div>
      </div>
    </div>
  );
};
export default SingleNote;
