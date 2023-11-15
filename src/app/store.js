import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "",
  setTheme: (theme) => set({ theme }),
}));


export const useLoadingStore = create((set) => ({
  isLoading:false,
  setIsLoading: (isLoading) => set({ isLoading }),

}));

export const useAddNotesStore = create((set) => ({
  isOpen: false,
  isPriorityOpen: false,
  isTagsOpen: false,
  selectedTags: [],
  priority:'No Priority',
  setIsPriorityOpen: (isPriorityOpen) => set({ isPriorityOpen }),
  setPriority: (priority) => set({ priority }),
  setSelectedTags: (selectedTags) => set({selectedTags }),
  setIsTagsOpen: (isTagsOpen) => set({ isTagsOpen }),
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export const useUserStore = create((set) => ({
  // TODO Change hardcoded tags value
  id: "",
  username: "",
  notes: [],
  tags: [],
  setUsername: (username) => set({ username }),
  setNotes: (notes) => set({ notes }),
  setTags: (tags) => set({ tags }),
}));

export const useSidebarStore = create((set) => ({
  isSidebarOpen: true,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));
