"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { signOut, useSession } from "next-auth/react";
import CreateNotes from "../../components/CreateNotes";
import { useAddNotesStore, useSidebarStore, useUserStore } from "../../store";
import SingleNote from "@/app/components/SingleNote";
import { Icon } from "@iconify/react";
import SideBar from "@/app/components/SideBar";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  // Accessing State
  const [isOpen, setIsOpen] = useAddNotesStore((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);

  const [notes, setNotes] = useUserStore((state) => [
    state.notes,
    state.setNotes,
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [
    state.isSidebarOpen,
    state.setIsSidebarOpen,
  ]);

  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  // const fetchNotes = async () => {
  //   setLoading(true);
  //   const response = await fetch("/api/get-notes");
  //   const data = await response.json();
  //   setNotes(data?.usersWithNotes?.notes);
  //   setLoading(false);
  // };

  return (
    // TODO Fix sidebar disappearing when coming from homepage
    <div className="h-screen text-text-primary bg-surface-primary">
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

          {/* {loading ? (
            <span>Loading</span>
          ) : (
            <div>
              {notes?.map((note) => (
                <div key={note.id}>
                  <SingleNote note={note} taskDesc={note.taskDescription} />
                </div>
              ))}
            </div>
          )} */}

          <div className="mt-10">
            <SingleNote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
