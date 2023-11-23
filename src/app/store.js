import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "",
  setTheme: (theme) => set({ theme }),
}));

export const useLoadingStore = create((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  isTagsLoading: false,
  setIsTagsLoading: (isTagsLoading) => set({ isTagsLoading }),
}));

export const useAddNotesStore = create((set) => ({
  isOpen: false,
  isPriorityOpen: false,
  isTagsOpen: false,
  isCalendarOpen: false,
  selectedTags: [],
  priority: "No Priority",
  dueDate: new Date(),
  setIsOpen: (isOpen) => set({ isOpen }),
  setIsPriorityOpen: (isPriorityOpen) => set({ isPriorityOpen }),
  setIsTagsOpen: (isTagsOpen) => set({ isTagsOpen }),
  setIsCalendarOpen: (isCalendarOpen) => set({ isCalendarOpen }),
  setSelectedTags: (selectedTags) => set({ selectedTags }),
  setPriority: (priority) => set({ priority }),
  setDueDate: (dueDate) => set({ dueDate }),
}));

export const useUserStore = create((set) => ({
  id: "",
  username: "",
  notes: [],
  tags: [],

  setUsername: (username) => set({ username }),
  setId: (id) => set({ id }),
  setNotes: (notes) => set({ notes }),
  setTags: (tags) => set({ tags }),
}));

export const useSidebarStore = create((set) => ({
  isSidebarOpen: false,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));
