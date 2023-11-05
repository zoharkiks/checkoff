"use client";

import React, { useEffect } from "react";
import { Button } from "../components/Button";
import { signOut, useSession } from "next-auth/react";
import CreateNotes from "../components/CreateNotes";
import { useAddNotesStore, useUserStore } from "../store";

const Dashboard = () => {
  const { session, data } = useSession();

  // Accessing State
  const [isOpen, setIsOpen] = useAddNotesStore((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);

  const [username, setUsername] = useUserStore((state) => [
    state.username,
    state.setUsername,
  ]);

  return (
    <div className="padding">
      {isOpen && <CreateNotes />}

      <div className="flex items-center justify-center space-x-4">
        <span>Welcome {username}</span>

        <Button onClick={() => signOut()}>Log Out</Button>

        <Button onClick={() => setIsOpen(true)}>+</Button>
      </div>

          </div>
  );
};

export default Dashboard;
