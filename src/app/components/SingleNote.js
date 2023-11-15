import { Icon } from "@iconify/react";
import React from "react";

const SingleNote = ({
  taskTitle,
  taskDesc,
  selectedTags,
  selectedPriority,
}) => {
  return (
    <div className="space-y-4 text-white rounded-xl padding bg-accent-secondary">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon className="text-2xl" icon={"mi:favorite"} />
          <span className="mt-1 text-sm font-semibold">14th November 2023</span>
        </div>
        <Icon
          className="cursor-pointer"
          width={30}
          icon={"fluent:open-48-filled"}
        />
      </div>

      {/* TODO Add space for task description */}
      <h4 className="text-3xl font-bold capitalize ">{taskTitle}</h4>

      <h5 className="text-xl font-bold capitalize ">{taskDesc}</h5>

      {selectedTags.length > 0 ? (
        selectedTags.map((tag) => <div className="px-2 bg-red-500 rounded-xl w-min">{tag}</div>)
      ) : (
        <span>No tags</span>
      )}

      {selectedPriority && <div>{selectedPriority}</div>}

      <div className="flex justify-between">
        <span>07:30 AM to 9:30 AM</span>

        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-primary">
          pp
        </div>
      </div>
    </div>
  );
};
export default SingleNote;
