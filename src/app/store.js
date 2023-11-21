import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "",
  setTheme: (theme) => set({ theme }),
}));

export const useLoadingStore = create((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export const useAddNotesStore = create((set) => ({
  isOpen: false,
  isPriorityOpen: false,
  isTagsOpen: false,
  isCalendarOpen: false,
  selectedTags: [],
  priority: "No Priority",
  dueDate:new Date() || '',
  setIsPriorityOpen: (isPriorityOpen) => set({ isPriorityOpen }),
  setPriority: (priority) => set({ priority }),
  setDueDate: (date) => set({ dueDate:date }),
  setSelectedTags: (selectedTags) => set({ selectedTags }),
  setIsTagsOpen: (isTagsOpen) => set({ isTagsOpen }),
  setIsCalendarOpen: (isCalendarOpen) => set({ isCalendarOpen }),
  setIsOpen: (isOpen) => set({ isOpen }),
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
  isSidebarOpen: true,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));
