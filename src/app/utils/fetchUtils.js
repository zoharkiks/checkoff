



export const fetchNotes = async (
  setIsLoading,
  setNotes,
  setCompletedNotes,
  status
) => {
  let url = "/api/get-notes";

  // Append the status query parameter if it is provided
  if (status) {
    url += `?status=${status}`;
  }

  try {
    setIsLoading(true);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (status === "unfinished") {
      setNotes(data?.usersWithNotes?.notes);
    } else setCompletedNotes(data?.usersWithNotes?.notes);
    setIsLoading(false);
  } catch (error) {
    console.error("Error fetching notes:", error);
    setIsLoading(false);
  }
};

export const fetchTags = async (setIsTagsLoading, setTags) => {
  try {
    setIsTagsLoading(true);
    const response = await fetch("/api/get-tags");
    const data = await response.json();
    setTags(data?.allTags?.userTags);
    setIsTagsLoading(false);
  } catch (error) {
    console.error("Error fetching tags:", error);
    setIsTagsLoading(false);
  }
};

export const handleDeleteNote = async (id,deleteNote) => {
  
  deleteNote(id)
  try {
    const response = await fetch("/api/delete-note", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        noteId: id,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Note deleted:", data);
      // Handle successful deletion (e.g., update UI or state)
    } else {
      console.error("Failed to delete note:", data.message);
      // Handle errors (e.g., show error message to user)
    }
  } catch (error) {
    console.error("Error deleting note:", error);
  }
};
