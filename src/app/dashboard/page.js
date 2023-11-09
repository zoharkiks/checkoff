"use client";

import React, { useEffect } from "react";
import { Button } from "../components/Button";
import { signOut, useSession } from "next-auth/react";
import CreateNotes from "../components/CreateNotes";
import { useAddNotesStore, useUserStore } from "../store";

const Dashboard = () => {
  // Accessing State
  const [isOpen, setIsOpen] = useAddNotesStore((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);


  return (
    <div className="padding">
      {isOpen && <CreateNotes />}

      <div className="flex items-center justify-center space-x-4">
        <span>Welcome Test Users</span>

        <Button onClick={signOut}>Log Out</Button>

        <Button onClick={() => setIsOpen(true)}>+</Button>
      </div>
    </div>
  );
};

export default Dashboard;
