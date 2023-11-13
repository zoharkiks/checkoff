import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "",
  setTheme: (theme) => set({ theme }),
  
}));

export const useAddNotesStore = create((set) => ({
  isOpen: false,
  isPriorityOpen:false,
  setIsPriorityOpen: (isPriorityOpen) => set({ isPriorityOpen }),
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export const useUserStore = create((set) => ({
  id: "",
  username: "",
  notes: [],
  setUsername: (username) => set({ username }),
  setNotes: (notes) => set({ notes }),
}));

export const useSidebarStore = create((set) => ({
  isSidebarOpen: Boolean,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));
