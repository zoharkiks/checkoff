"use client";
import { useSidebarStore } from "@/app/store";
import SideBar from "../../_components/SideBar";
import { Icon } from "@iconify/react";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [
    state.isSidebarOpen,
    state.setIsSidebarOpen,
  ]);

  return (
    <div className="min-h-screen text-text-primary bg-surface-primary">
        
      <Icon
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="text-3xl cursor-pointer text-accent-primary md:hidden"
        icon="solar:menu-dots-bold"
      />
      {/* Sidebar */}
      <div className="grid md:grid-cols-12">
        <div className=" sm:col-span-4 lg:col-span-3">
          {isSidebarOpen && <SideBar />}
        </div>

        <div className="col-span-12 px-6 md:col-start-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
