"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { useAddNotesStore, useLoadingStore, useUserStore } from "../../store";
import Calendar from "react-calendar";
import { useSession } from "next-auth/react";
import PriorityList from "./PriorityList";
import CalendarList from "./CalendarList";
import TagsList from "./TagsList";
import { fetchNotes } from "@/app/utils/fetchUtils";
import { Icon } from "@iconify/react";

const CreateNotes = () => {
  const [
    setIsOpen,
    isPriorityOpen,
    setIsPriorityOpen,
    isTagsOpen,
    setIsTagsOpen,
    isCalendarOpen,
    setIsCalendarOpen,
    priority,
    selectedTags,
    dueDate,
    setDueDate,
  ] = useAddNotesStore((state) => [
    state.setIsOpen,
    state.isPriorityOpen,
    state.setIsPriorityOpen,
    state.isTagsOpen,
    state.setIsTagsOpen,
    state.isCalendarOpen,
    state.setIsCalendarOpen,
    state.priority,
    state.selectedTags,
    state.dueDate,

    state.setDueDate,
  ]);

  const [isLoading, setIsLoading] = useLoadingStore((state) => [
    state.isLoading,
    state.setIsLoading,
  ]);

  const [notes, setNotes, tags, setTags] = useUserStore((state) => [
    state.notes,
    state.setNotes,
    state.tags,
    state.setTags,
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
        body: JSON.stringify({
          taskName,
          taskDescription,
          userId,
          priority,
          selectedTags,
          dueDate,
        }),
      });

      if (resCreateNote.status === 200) {
        setIsOpen(false);
        formRef.current.reset();
        await fetchNotes(setIsLoading, setNotes);
      }
    } catch (error) {
      console.log("Note not created");
    }
  };

  // TODO Close modal when clicked outside
  // TODO Add Calendar Functionality

  return (
    <div className="fixed top-0 left-0 z-10 flex items-start justify-center w-full h-full bg-black bg-opacity-50 padding backdrop-blur-sm">
      <div className="flex justify-center p-4 rounded-lg min-w-[40%] bg-surface-secondary mt-28 ">
        <form
          ref={formRef}
          action=""
          className="flex flex-col flex-wrap w-full "
        >
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

          <div className="flex items-center justify-start mt-4 space-x-4 ">
            <div className="relative flex flex-wrap items-center justify-center space-x-4">
              {isCalendarOpen && <CalendarList />}
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setIsCalendarOpen(!isCalendarOpen);
                }}
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
