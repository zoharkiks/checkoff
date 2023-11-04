import React from "react";
import { Button } from "./Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-surface-secondary padding">
      <Link href="/">
        <span class="font-bold">CheckOff</span>
      </Link>
      <div className="flex space-x-2">
        <Link href="/login">
          <Button intent="primary">Login</Button>
        </Link>

        <Link href="/create-account">
          <Button intent="secondary">Create Account</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
