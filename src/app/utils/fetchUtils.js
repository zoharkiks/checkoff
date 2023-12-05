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
