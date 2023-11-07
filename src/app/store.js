import { create } from "zustand";

export const useAddNotesStore = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export const useUserStore = create((set) => ({
  id:'',
  username: "",
  setUsername: (username) => set({ username }),
}));
