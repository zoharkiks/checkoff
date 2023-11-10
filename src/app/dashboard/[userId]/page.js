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
    <div className="padding">
      {isOpen && <CreateNotes />}

      {isSidebarOpen && <SideBar />}

      <div className="flex items-center justify-between space-x-4">
        <Icon onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-3xl cursor-pointer" icon="solar:menu-dots-bold" />

        <Button onClick={() => signOut({ callbackUrl: "/" })}>Log Out</Button>

        <Button onClick={() => setIsOpen(!isOpen)}>+</Button>
      </div>
      {loading ? (
        <span>Loading</span>
      ) : (
        <div>
          {notes?.map((note) => (
            <div key={note.id}>
              <SingleNote note={note} taskDesc={note.taskDescription} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;