"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import CreateNotes from "../../components/CreateNotes/CreateNotes";
import { useAddNotesStore, useLoadingStore, useSidebarStore, useUserStore } from "../../store";
import SingleNote from "@/app/components/SingleNote";
import { Icon } from "@iconify/react";

import SideBar from "@/app/components/SideBar";
import { fetchNotes, fetchTags } from "@/app/utils/fetchUtils";

const Dashboard = () => {
  // Accessing Zustand State
  const [isOpen, setIsOpen] = useAddNotesStore((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);

  const [notes, setNotes, tags, setTags,id] = useUserStore((state) => [
    state.notes,
    state.setNotes,
    state.tags,
    state.setTags,
    state.id
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [
    state.isSidebarOpen,
    state.setIsSidebarOpen,
  ]);

  const [isLoading,setIsLoading] = useLoadingStore((state) => [
    state.isLoading,
    state.setIsLoading,
  ]);

  
 

  useEffect(() => {
    fetchNotes(setIsLoading,setNotes);
    fetchTags(setTags);
  }, []);


 


  return (
    // BUGFIX Fix sidebar disappearing when coming from homepage
    // TODO Display a message if no notes are present
    <div className={`text-text-primary bg-surface-primary ${isLoading && 'h-screen'}`}>
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

            <div className="flex justify-end w-full">
              <Button
                icon="simple-line-icons:plus"
                onClick={() => setIsOpen(!isOpen)}
              >
                New Task
              </Button>
            </div>
          </div>

          {isLoading ? (
            <span>Loading</span>
          ) : (
            <div className="grid gap-5 mt-10">
              {notes?.map((note) => (
                <div key={note.id}>
                  <SingleNote
                    taskTitle={note.taskName}
                    taskDesc={note.taskDescription}
                    selectedTags={note?.tags}
                    selectedPriority={note.priority}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
