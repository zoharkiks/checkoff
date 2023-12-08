"use client";

import React, { useEffect, useState } from "react";
import {
  useAddNotesStore,
  useLoadingStore,
  useSidebarStore,
  useUserStore,
} from "../../../store";

import { Icon } from "@iconify/react";

import SideBar from "../../_components/SideBar";

import { fetchNotes, fetchTags } from "@/app/utils/fetchUtils";
import { useSidebar } from "@/app/utils/useSidebar";
import CreateNotes from "../../_components/CreateNotes";
import SingleNote from "../../_components/SingleNote";
import { Button } from "@/components/Button";

const Dashboard = () => {
  // Accessing Zustand State
  const [isOpen, setIsOpen] = useAddNotesStore((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);

  const [notes, setNotes, tags, setTags, id, setCompletedNotes] = useUserStore(
    (state) => [
      state.notes,
      state.setNotes,
      state.tags,
      state.setTags,
      state.id,
      state.setCompletedNotes,
    ]
  );

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
    if (notes.length === 0) {
      fetchNotes(setIsLoading, setNotes, setCompletedNotes, "unfinished");
    }
    if (tags.length === 0) {
      fetchTags(setIsTagsLoading, setTags);
    }
  }, []);

  return (
    <div className="">
      {isOpen && <CreateNotes />}

      {notes.length > 0 && (
        <div className="flex justify-end w-full">
          <Button
            icon="simple-line-icons:plus"
            onClick={() => setIsOpen(!isOpen)}
          >
            New Task
          </Button>
        </div>
      )}

      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen ">
          <span>Loading</span>
        </div>
      ) : (
        <>
          {notes.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-screen ">
              <div className="flex-col">
                <p> No Unfinished Tasks Found 👍</p>
                <div className="flex items-center justify-center w-full ">
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    intent="ghost"
                    size={"medium"}
                  >
                    Create Now
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid h-full gap-5 mt-10 md:grid-cols-2 ">
              {notes?.map((note, index) => (
                <div className="h-full " key={note?.id || index}>
                  <SingleNote
                    favorite={note?.isFavorite}
                    id={note.id}
                    taskTitle={note?.taskName}
                    taskDesc={note?.taskDescription}
                    selectedTags={note?.tags}
                    selectedPriority={note?.priority}
                    dueDate={note?.dueDate}
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

export default Dashboard;
