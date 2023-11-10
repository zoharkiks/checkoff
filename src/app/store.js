import { create } from "zustand";




export const useAddNotesStore = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export const useUserStore = create((set) => ({
  id:'',
  username: "",
  notes:[],
  setUsername: (username) => set({ username }),
  setNotes:(notes)=>set({notes})
}));

export const useSidebarStore = create((set) => ({
  isSidebarOpen: true,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));