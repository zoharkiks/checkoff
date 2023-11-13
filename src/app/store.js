import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "",
  setTheme: (theme) => set({ theme }),
}));


export const useAddNotesStore = create((set) => ({
  isOpen: false,
  isPriorityOpen: false,
  isTagsOpen: false,
  selectedTags: [],
  priority:'',
  setIsPriorityOpen: (isPriorityOpen) => set({ isPriorityOpen }),
  setPriority: (priority) => set({ priority }),
  setSelectedTags: (selectedTags) => set({selectedTags }),
  setIsTagsOpen: (isTagsOpen) => set({ isTagsOpen }),
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export const useUserStore = create((set) => ({
  id: "",
  username: "",
  notes: [],
  // TODO Change hardcoded tags value
  tags: [],
  setUsername: (username) => set({ username }),
  setNotes: (notes) => set({ notes }),
}));

export const useSidebarStore = create((set) => ({
  isSidebarOpen: true,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));
