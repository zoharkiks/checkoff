import Link from "next/link";
import React from "react";
import { useSidebarStore } from "../store";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Icon } from "@iconify/react";

const SideBar = () => {
  // Accessing Zustand States
  const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [
    state.isSidebarOpen,
    state.setIsSidebarOpen,
  ]);

  const { data: session } = useSession();

  console.log(session);
  return (
    <div className="absolute top-0 left-0 w-[45%] h-screen md:w-1/4 lg:w-1/5 bg-surface-secondary padding">
      <div className="">
        <div className="flex flex-col">
          <Link href="/" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <span className="logo">CheckOff</span>
          </Link>
          <span className="text-sm font-medium">
            Turning To-Do's into Ta-Da's
          </span>
        </div>

        <div className="grid items-center justify-center grid-cols-4 gap-2 p-2 mt-6 border rounded-xl">
          {/* profile pic */}
          <div className="w-8 h-8 rounded-full bg-surface-primary"></div>
          {/* User Data */}
          <div className="flex-col items-center justify-center col-span-3">
            <div className="flex ">
              <span className="text-xs font-semibold">
                {session?.user?.name}
              </span>
              <Icon icon={"system-uicons:chevron-down"} />
            </div>
            <span className="text-xs">{session?.user?.email}</span>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between cursor-pointer">
            <span>Menu</span>
            <Icon icon={"system-uicons:chevron-down"} />
          </div>

          <div className="flex flex-col p-4">
            f
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
