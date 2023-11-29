"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { useAddNotesStore, useLoadingStore, useUserStore } from "../../store";
import Calendar from "react-calendar";
import { useSession } from "next-auth/react";
import PriorityList from "./PriorityList";
import CalendarList from "./CalendarList";
import TagsList from "./TagsList/TagsList";
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

  const [isLoading, setIsLoading, isSubmitLoading, setIsSubmitLoading] =
    useLoadingStore((state) => [
      state.isLoading,
      state.setIsLoading,
      state.isSubmitLoading,
      state.setIsSubmitLoading,
    ]);

  const [notes, setNotes, tags, setTags] = useUserStore((state) => [
    state.notes,
    state.setNotes,
    state.tags,
    state.setTags,
  ]);

  const { data } = useSession();
  const [errorMessage, setErrorMessage] = useState("");

  const taskNameRef = useRef();
  const taskDescriptionRef = useRef();
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskName = taskNameRef?.current?.value;
    const taskDescription = taskDescriptionRef?.current?.value;

    const userId = data?.user?.id;

    try {
      setIsSubmitLoading(true);
      setErrorMessage("");
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

      if (resCreateNote.ok) {
        setIsOpen(false);
        await fetchNotes(setIsLoading, setNotes);
        setIsSubmitLoading(false);
        formRef.current.reset();
      } else {
        const errorData = await resCreateNote.json();
        setErrorMessage(errorData?.message);
        setIsSubmitLoading(false);
      }
    } catch (error) {
      setIsSubmitLoading(false);
    }
  };

  // TODO Close modal when clicked outside


  
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
              <Button
                disabled={isSubmitLoading}
                className={`${
                  isSubmitLoading && "bg-gray-500 hover:bg-gray-500"
                }`}
                onClick={handleSubmit}
              >
                {isSubmitLoading ? (
                  <span className="text-sm">Creating</span>
                ) : (
                  <Icon width={20} icon={"ion:add-outline"}></Icon>
                )}
              </Button>
            </div>
          </div>

          {errorMessage && <span>{errorMessage}</span>}
        </form>
      </div>
    </div>
  );
};

export default CreateNotes;
