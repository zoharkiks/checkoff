import { useAddNotesStore, useUserStore } from "@/app/store";
import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { useSession } from "next-auth/react";

const TagsList = () => {
  const [isTagsOpen, setIsTagsOpen, selectedTags, setSelectedTags] =
    useAddNotesStore((state) => [
      state.isTagsOpen,
      state.setIsTagsOpen,
      state.selectedTags,
      state.setSelectedTags,
    ]);

  const newTagRef = useRef();
  const { data } = useSession();

  const [tags] = useUserStore((state) => [state.tags]);


  const handleCheck = (e) => {
    var updatedList = [...selectedTags];
    if (e.target.checked) {
      updatedList = [...selectedTags, e.target.value];
    } else {
      updatedList.splice(selectedTags.indexOf(e.target.value), 1);
    }
    setSelectedTags(updatedList);
  };

  const handleNewTagSubmit = async (e) => {
    e.preventDefault();
    const tagName = newTagRef?.current?.value;
    const userId = data?.user?.id;

    try {
      const resCreateTag = await fetch("/api/create-tag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tagName, userId }),
      });
      if (resCreateTag.status === 200) {
        newTagRef.current.value = "";

        console.log("Tag Created");
      }
    } catch (error) {
      console.log("Tag not created");
    }
  };

  useEffect(() => {
    
  
   console.log(selectedTags);
  }, [selectedTags])
  

  return (
    <div className="absolute p-4 text-white border rounded-lg -top-10 left-10 bg-brand-secondary border-accent-primary">
      <h5 className="text-sm">Tags</h5>

      {tags?.length === 0 ? (
        <div className="flex flex-col mt-2 space-y-2">
          <input
            className="p-2 text-black rounded-lg "
            type="text"
            placeholder="Create Your First Tag"
            ref={newTagRef}
          />
          <Button onClick={handleNewTagSubmit} intent="secondary">
            Create
          </Button>
        </div>
      ) : (
        <div className="grid mt-2 ">
          {tags?.map((tag) => (
            <div key={tag.id} className="space-x-2">
              <input
                type="checkbox"
                onChange={handleCheck}
                value={tag.tagName}
                checked={selectedTags.includes(tag.tagName)}
                name=""
                id={tag.tagName}
              />
              <span>{tag.tagName}</span>
            </div>
          ))}
        </div>
      )}

      <Icon
        onClick={() => setIsTagsOpen(!isTagsOpen)}
        className="absolute text-sm cursor-pointer top-2 right-2"
        icon={"gg:close"}
      />
    </div>
  );
};

export default TagsList;
