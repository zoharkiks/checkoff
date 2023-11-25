import { useAddNotesStore, useLoadingStore, useUserStore } from "@/app/store";
import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../Button";
import NewTag from "@/app/components/CreateNotes/TagsList/NewTag";
import { useSession } from "next-auth/react";
import { fetchTags } from "@/app/utils/fetchUtils";

const TagsList = () => {

  const [isTagsOpen, setIsTagsOpen, selectedTags, setSelectedTags] =
    useAddNotesStore((state) => [
      state.isTagsOpen,
      state.setIsTagsOpen,
      state.selectedTags,
      state.setSelectedTags,
    ]);

  const [isLoading, setIsLoading, isTagsLoading, setIsTagsLoading] =
    useLoadingStore((state) => [
      state.isLoading,
      state.setIsLoading,
      state.isTagsLoading,
      state.setIsTagsLoading,
    ]);

  const [tags, setTags] = useUserStore((state) => [state.tags, state.setTags]);

  const newTagRef = useRef();
  const { data } = useSession();

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
      setIsTagsLoading(true);
      const resCreateTag = await fetch("/api/create-tag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tagName, userId }),
      });

      fetchTags(setIsTagsLoading, setTags);
      newTagRef.current.value = "";
    } catch (error) {
      console.log("error in tag");
    }
  };

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  return (
    <div className="absolute p-4 text-white border rounded-lg -top-10 left-10 bg-brand-secondary border-accent-primary">
      <h5 className="text-sm">Tags</h5>

      {tags.length === 0 && !isTagsLoading ? (
        <NewTag
          newTagRef={newTagRef}
          handleNewTagSubmit={handleNewTagSubmit}
          isTagsLoading={isTagsLoading}
        />
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

          {isTagsLoading && <span>Loading</span>}
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
