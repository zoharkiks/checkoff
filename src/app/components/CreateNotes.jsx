"use client"

import React, { useState } from "react";
import { Button } from "./Button";
import { useAddNotesStore } from "../store";

const CreateNotes = () => {

const [setIsOpen] =useAddNotesStore(state=>[state.setIsOpen])
    


    
  return (
    <div className="fixed top-0 left-0 z-10 flex items-start justify-center w-full h-full bg-black bg-opacity-50 padding backdrop-blur-sm">
      <div class="bg-white rounded-lg p-4 w-1/2 mt-28">
        <h2 class="text-2xl font-semibold mb-4">Modal Title</h2>
        <p>Modal content goes here...</p>
        <Button onClick={()=>setIsOpen(false)}>Close</Button>
      </div>
    </div>
  );
};

export default CreateNotes;
