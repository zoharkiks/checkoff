export const fetchNotes = async (setIsLoading, setNotes) => {
  try {
    setIsLoading(true);
    const response = await fetch("/api/get-notes");
    const data = await response.json();
    setNotes(data?.usersWithNotes?.notes);
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
