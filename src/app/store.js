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
  isSubmitLoading: false,
  setIsSubmitLoading: (isSubmitLoading) => set({ isSubmitLoading }),
}));

export const useAddNotesStore = create((set) => ({
  isOpen: false,
  isPriorityOpen: false,
  isTagsOpen: false,
  isCalendarOpen: false,
  selectedTags: [],
  priority: "No Priority",
  dueDate: new Date(),
  favorite: Boolean,
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
  completedNotes: [],
  tags: [],
  favoriteNotes: [],

  setUsername: (username) => set({ username }),
  setId: (id) => set({ id }),
  setNotes: (notes) => set({ notes }),
  setCompletedNotes: (completedNotes) => set({ completedNotes }),

  prependNote: (createdNote) => {
    set((state) => ({
      notes: [createdNote, ...state.notes],
    }));
  },


  markNoteComplete: (noteId) => set((state) => {
    // Find the note that is completed
    const note = state.notes.find((note) => note.id === noteId);
    if (!note) {
      return; // Note not found, you might want to handle this case
    }
    // Remove the note from 'notes' array
    const newNotes = state.notes.filter((note) => note.id !== noteId);
    // Add the note to 'completedNotes' array
    const newCompletedNotes = [note,...state.completedNotes];
    return {
      ...state,
      notes: newNotes,
      completedNotes: newCompletedNotes,
    };
  }),


  
  setTags: (tags) => set({ tags }),
  toggleFavorite: (noteId) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === noteId ? { ...note, isFavorite: !note.isFavorite } : note
      ),
    })),
}));

export const useSidebarStore = create((set) => ({
  isSidebarOpen: false,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));
