"use client";
import { useAddNotesStore, useSidebarStore, useUserStore } from "@/app/store";
import SideBar from "../../_components/SideBar";
import { Icon } from "@iconify/react";
import { Button } from "@/components/Button";
import CreateNotes from "../../_components/CreateNotes";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [
    state.isSidebarOpen,
    state.setIsSidebarOpen,
  ]);

  const [notes, setNotes, tags, setTags, id, completedNotes, setCompletedNotes] = useUserStore(
    (state) => [
      state.notes,
      state.setNotes,
      state.tags,
      state.setTags,
      state.id,
      state.completedNotes,
      state.setCompletedNotes,
    ]
  );

  const [isOpen, setIsOpen] = useAddNotesStore((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);

  return (
    <div className="min-h-screen text-text-primary bg-surface-primary">
      {isOpen && <CreateNotes />}

      <div className="flex items-center padding md:p-4">
        <Icon
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-3xl cursor-pointer text-accent-primary md:hidden"
          icon="solar:menu-dots-bold"
        />

          <div className="flex justify-end w-full">
            <Button
              icon="simple-line-icons:plus"
              onClick={() => setIsOpen(!isOpen)}
            >
              New Task
            </Button>
          </div>
      
      </div>
      {/* Sidebar */}
      <div className="grid md:grid-cols-12">
        <div className=" sm:col-span-4 lg:col-span-3">
          {isSidebarOpen && <SideBar />}
        </div>

        <div className="col-span-12 px-6 md:col-start-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
