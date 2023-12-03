import React from "react";
import { Button } from "./Button";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useSidebarStore } from "../app/store";

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
            <Button>Dashboard</Button>
          </Link>

          <Button onClick={() => signOut({ callbackUrl: "/" })}>Log Out</Button>
        </div>
      ) : (
        <div className="flex space-x-4">
          <Link href="/login">
            <Button intent="primary">Login</Button>
          </Link>

          <Link href="/create-account">
            <Button intent="secondary">Create Account</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
