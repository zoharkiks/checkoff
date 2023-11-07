"use client";

import React, { useRef, useState } from "react";
import { Button } from "./Button";
import { useAddNotesStore } from "../store";

const CreateNotes = () => {
  const [setIsOpen] = useAddNotesStore((state) => [state.setIsOpen]);

  const taskNameRef = useRef();
  const taskDescriptionRef = useRef();
  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskName = taskNameRef?.current?.value;
    const taskDescription = taskDescriptionRef?.current?.value
    

    try {
      const resCreateNote = await fetch("api/add-note", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify({ taskName, taskDescription }),
      });

      if(resCreateNote.status===200){
        formRef.current.reset();
        console.log("Note Created");
        
      }
    } catch (error) {
      console.log('Note not created');
    }
  };

  return (
    <div className="fixed top-0 left-0 z-10 flex items-start justify-center w-full h-full bg-black bg-opacity-50 padding backdrop-blur-sm">
      <div class="bg-white rounded-lg p-4 w-3/4 mt-28">
        <form ref={formRef} action="" className="flex flex-col">
          <input
            ref={taskNameRef}
            className="text-xl outline-none"
            type="text"
            name=""
            id="note_title"
            placeholder="Task Name"
          />
          <textarea
            ref={taskDescriptionRef}
            className="break-words outline-none whitespace-break-spaces"
            type="text"
            name=""
            id="note_title"
            placeholder="Description"
          />

<div className="flex space-x-4">
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </div>
        </form>
        
      </div>
    </div>
  );
};

export default CreateNotes;
