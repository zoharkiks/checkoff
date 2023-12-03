'use client';

import React from "react";
import { Button } from "../../../components/Button";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useSidebarStore } from "../../store";

const Navbar = () => {
  const { data: session, status } = useSession();

  // Accessing Zustand States
  const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [
    state.isSidebarOpen,
    state.setIsSidebarOpen,
  ]);

  return (
    <nav className="flex items-center justify-between bg-surface-secondary padding">
      <Link href="/">
        <span className="logo">CheckOff</span>
      </Link>

      {status === "authenticated" ? (
        <div className="flex space-x-4">
          <Link
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            href={`dashboard/${session?.user?.id}`}
          >
            <Button intent='ghost' >Enter CheckOff</Button>
          </Link>

          <Button onClick={() => signOut({ callbackUrl: "/" })}>Log Out</Button>
        </div>
      ) : (
        <div className="flex space-x-4">
          <Link href="/login">
            <Button intent="ghost">Log In</Button>
          </Link>

          <Link href="/create-account">
            <Button intent="secondary">Get CheckOff Free</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
