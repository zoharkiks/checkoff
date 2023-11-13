"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { useAddNotesStore } from "../../store";
import { useSession } from "next-auth/react";
import PriorityList from "./PriorityList";
import TagsList from "./TagsList";

const CreateNotes = () => {
  const [
    setIsOpen,
    isPriorityOpen,
    setIsPriorityOpen,
    isTagsOpen,
    setIsTagsOpen,
  ] = useAddNotesStore((state) => [
    state.setIsOpen,
    state.isPriorityOpen,
    state.setIsPriorityOpen,
    state.isTagsOpen,
    state.setIsTagsOpen,
  ]);

  const { data } = useSession();

  const taskNameRef = useRef();
  const taskDescriptionRef = useRef();
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskName = taskNameRef?.current?.value;
    const taskDescription = taskDescriptionRef?.current?.value;
    const userId = data?.user?.id;

    try {
      const resCreateNote = await fetch("/api/create-note", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ taskName, taskDescription, userId }),
      });

      if (resCreateNote.status === 200) {
        formRef.current.reset();
        console.log("Note Created");
      }
    } catch (error) {
      console.log("Note not created");
    }
  };

  // TODO Close modal when clicked outside
  // TODO Add Calendar Functionality
  // TODO Make a dropdown for folder selection
  // TODO Make a dropdown for tags selection

  return (
    <div className="fixed top-0 left-0 z-10 flex items-start justify-center w-full h-full bg-black bg-opacity-50 padding backdrop-blur-sm">
      <div className="flex p-4 rounded-lg w-3/ bg-surface-secondary mt-28 ">
        <form ref={formRef} action="" className="flex flex-col ">
          <input
            ref={taskNameRef}
            className="pb-2 text-lg text-white bg-transparent border-b-2 outline-none border-accent-secondary focus:outline-none placeholder:text-accent-primary "
            type="text"
            name=""
            id="note_title"
            placeholder="Task Name"
          />
          <textarea
            ref={taskDescriptionRef}
            className="mt-4 overflow-hidden text-white break-words bg-transparent outline-none whitespace-break-spaces focus:outline-none placeholder:text-accent-primary "
            name=""
            id="note_title"
            placeholder="Description"
          />

          <div className="flex items-center justify-center mt-4 space-x-4 flex-wra">
            <Button
              onClick={(e) => e.preventDefault()}
              icon={"mingcute:down-fill"}
            >
              Inbox
            </Button>

            <div className="relative flex items-center justify-center space-x-4">
              <Button
                onClick={(e) => e.preventDefault()}
                icon={"ion:calendar-number"}
              />

              {/* Priority List */}
              <div className="">
                {isPriorityOpen && <PriorityList />}
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPriorityOpen(!isPriorityOpen);
                  }}
                  icon={"ion:flag-outline"}
                />
              </div>

              {/* Tags list */}
              <div className="">
                {isTagsOpen && <TagsList />}
                <Button
                  onClick={(e) => {
                    setIsTagsOpen(!isTagsOpen), e.preventDefault();
                  }}
                  icon={"ion:pricetag-outline"}
                />
              </div>
              <Button icon={"ion:add-outline"} onClick={handleSubmit} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNotes;
