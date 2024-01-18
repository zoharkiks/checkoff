"use client";

import SingleNote from "@/app/(dashboard)/_components/SingleNote";
import { useLoadingStore, useSidebarStore, useUserStore } from "@/app/store";
import { fetchNotes } from "@/app/utils/fetchUtils";
import { useSidebar } from "@/app/utils/useSidebar";
import { Button } from "@/components/Button";
import React, { useEffect } from "react";

const CompletedNotes = () => {
  const [
    notes,
    setNotes,
    tags,
    setTags,
    id,
    completedNotes,
    setCompletedNotes,
  ] = useUserStore((state) => [
    state.notes,
    state.setNotes,
    state.tags,
    state.setTags,
    state.id,
    state.completedNotes,
    state.setCompletedNotes,
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [
    state.isSidebarOpen,
    state.setIsSidebarOpen,
  ]);

  const [isLoading, setIsLoading, isTagsLoading, setIsTagsLoading] =
    useLoadingStore((state) => [
      state.isLoading,
      state.setIsLoading,
      state.isTagsLoading,
      state.setIsTagsLoading,
    ]);

  useSidebar(setIsSidebarOpen);


  useEffect(() => {
    if (completedNotes.length === 0 ) {
      fetchNotes(setIsLoading, setNotes, setCompletedNotes, "finished");
    }
  }, []);

  return (
    <div className="padding ">
      <h3 className="text-2xl font-bold">List Of All The Completed Notes</h3>

      {isLoading ? (
        <div className="flex mt-10 ">
          <span>Loading</span>
        </div>
      ) : (
        <>
          {completedNotes.length === 0 ? (
            <div className="flex mt-10 ">
              <p className=""> No Completed Tasks Found 👍</p>
            </div>
          ) : (
            <div className="grid gap-5 mt-10 md:grid-cols-2 ">
              {completedNotes?.map((completedNote, index) => (
                <div className="h-full " key={completedNote?.id || index}>
                  <SingleNote
                    isCompleted={true}
                    favorite={completedNote?.isFavorite}
                    id={completedNote.id}
                    taskTitle={completedNote?.taskName}
                    taskDesc={completedNote?.taskDescription}
                    selectedTags={completedNote?.tags}
                    selectedPriority={completedNote?.priority}
                    dueDate={completedNote?.dueDate}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CompletedNotes;
