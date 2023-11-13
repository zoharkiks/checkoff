import { useAddNotesStore, useUserStore } from "@/app/store";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

const TagsList = () => {

  
  
  const [isTagsOpen, setIsTagsOpen, selectedTags, setSelectedTags] =
    useAddNotesStore((state) => [
      state.isTagsOpen,
      state.setIsTagsOpen,
      state.selectedTags,
      state.setSelectedTags,
    ]);



  const [tags] = useUserStore((state) => [state.tags]);


  const handleCheck =(e) => {
    var updatedList = [...selectedTags];
  if (e.target.checked) {
    updatedList = [...selectedTags, e.target.value];
  } else {
    updatedList.splice(selectedTags.indexOf(e.target.value), 1);
  }
  setSelectedTags(updatedList); 
  }


  
  

  return (
    <div className="absolute p-4 text-white border rounded-lg -top-10 left-10 bg-brand-secondary border-accent-primary">
      <h5 className="text-sm">Tags</h5>
      <div className="grid mt-2 ">
        {tags.map((tag) => (
          <div key={tag} className="space-x-2">
            <input
              type="checkbox"
              onChange={handleCheck}
              value={tag}
              checked={selectedTags.includes(tag)}
              name=""
              id={tag}
            />
            <span>{tag}</span>
          </div>
        ))}
      </div>

      <Icon
        onClick={() => setIsTagsOpen(!isTagsOpen)}
        className="absolute text-sm cursor-pointer top-2 right-2"
        icon={"gg:close"}
      />
    </div>
  );
};

export default TagsList;
