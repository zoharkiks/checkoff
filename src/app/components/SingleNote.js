import { Icon } from "@iconify/react";
import { formatUserDate } from "@/app/utils/formatUserDate";
import { getColorForPriority } from "@/app/utils/getColorForPriority";

import React from "react";
import { useAddNotesStore, useUserStore } from "../store";

// TODO Add edit 

const SingleNote = ({
  taskTitle,
  taskDesc,
  selectedTags,
  selectedPriority,
  dueDate,
  id,
  favorite
}) => {
  const formattedDate = formatUserDate(dueDate);
  const priorityColorClass = getColorForPriority(selectedPriority);

  // Accessing Zustand State
  const [toggleFavorite] = useUserStore((state) => [state.toggleFavorite]);

  const handleFavoriteToggle = async () => {
    // Use the 'toggleFavorite' function from the store and pass the note ID
    toggleFavorite(id);
    console.log("working");

    try {
      const response = await fetch("/api/update-favorite", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          noteId: id,
          favorite: favorite, // or false, depending on the desired state
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("An error occurred while updating the note:", error);
    }
  };

  

  return (
    <div className="space-y-4 text-white rounded-xl padding bg-accent-secondary">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon
            onClick={handleFavoriteToggle}
            className="text-2xl cursor-pointer"
            icon={"mi:favorite"}
          />
          <span className="mt-1 text-sm font-semibold">{formattedDate}</span>
        </div>
        <Icon
          className="cursor-pointer"
          width={30}
          icon={"fluent:open-48-filled"}
        />
      </div>

      <h4 className="text-3xl font-bold capitalize ">{taskTitle}</h4>

      <h5 className="text-xl font-bold capitalize ">{taskDesc}</h5>

      {selectedTags.length > 0 ? (
        selectedTags.map((tag) => (
          <div className="px-2 bg-red-500 rounded-xl w-min">{tag}</div>
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
