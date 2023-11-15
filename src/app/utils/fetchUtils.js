export  const fetchNotes = async (setIsLoading,setNotes) => {
    setIsLoading(true);
    const response = await fetch("/api/get-notes");
    const data = await response.json();
    setNotes(data?.usersWithNotes?.notes);

    setIsLoading(false);
  };


export  const fetchTags = async (setTags) => {
    const response = await fetch("/api/get-tags");
    const data = await response.json();
    setTags(data?.allTags?.userTags);
  };