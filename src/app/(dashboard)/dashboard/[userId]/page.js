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

  const [notes, setNotes, tags, setTags, id] = useUserStore((state) => [
    state.notes,
    state.setNotes,
    state.tags,
    state.setTags,
    state.id,
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
    fetchNotes(setIsLoading, setNotes);
    fetchTags(setIsTagsLoading, setTags);
  }, []);

 
  return (
    <div className="h-screen text-text-primary bg-surface-primary ">
      {isOpen && <CreateNotes />}

      <div className="grid md:grid-cols-12">
        {/* Sidebar */}
        <div className=" sm:col-span-4 lg:col-span-3">
          {isSidebarOpen && <SideBar />}
        </div>

        <div className="w-full bg-surface-primary sm:col-span-8 lg:col-span-9 padding">
          <div className="flex items-center justify-between sp`ace-x-4">
            <Icon
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-3xl cursor-pointer text-accent-primary md:hidden"
              icon="solar:menu-dots-bold"
            />

            {/* <Button onClick={() => signOut({ callbackUrl: "/" })}>
              Log Out
            </Button> */}

            
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
          </div>

          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-screen ">
              
              <span>Loading</span>
            </div>
          ) : (
            <>
              {notes.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-screen ">
                  <div className="flex-col">
                    <p> No Tasks Found 😟</p>
                    <div className="flex items-center justify-center w-full ">
                      
                    <Button onClick={() => setIsOpen(!isOpen)} intent='ghost' size={'medium'} >Create Now</Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid gap-5 mt-10 md:grid-cols-2 ">
                  {notes?.map((note, index) => (
                    <div key={note?.id || index}>
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
      </div>
    </div>
  );
};

export default Dashboard;
