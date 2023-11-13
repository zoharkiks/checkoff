import { useAddNotesStore } from "@/app/store";
import { Icon } from "@iconify/react";
import React from "react";

const PriorityList = () => {
  const [isPriorityOpen, setIsPriorityOpen] = useAddNotesStore((state) => [
    state.isPriorityOpen,
    state.setIsPriorityOpen,
  ]);


  const priorityOptions = [
    {
      id: "1",
      priorityName: "No Priority",
      iconColor: "text-white",
    },

    {
      id: "2",
      priorityName: "Low Priority",
      iconColor: "text-blue-500",
    },

    {
      id: "3",
      priorityName: "Medium Priority",
      iconColor: "text-yellow-500",
    },

    {
      id: "4",
      priorityName: "High Priority",
      iconColor: "text-red-500",
    },
  ];

  return (
    <div className="absolute p-4 text-white border rounded-lg -top-10 left-10 bg-brand-secondary border-accent-primary">
      <h5 className="ml-2 text-sm">Priority</h5>
      <div className="grid gap-2 mt-2">
        {priorityOptions.map((priority) => (
          <div
          key={priority.id}
            onClick={() => setIsPriorityOpen(!isPriorityOpen)}
            className="flex items-center px-2 py-1 space-x-2 transition-colors rounded-md cursor-pointer hover:bg-brand-primary "
          >
            <Icon className={priority.iconColor} icon={"ion:flag-outline"} />
            <span>{priority.priorityName}</span>
          </div>
        ))}
      </div>
      <Icon
        onClick={() => setIsPriorityOpen(!isPriorityOpen)}
        className="absolute text-sm cursor-pointer top-2 right-4"
        icon={"gg:close"}
      />
    </div>
  );
};

export default PriorityList;
