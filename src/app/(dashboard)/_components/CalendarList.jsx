"use client";

import { useAddNotesStore } from "@/app/store";
import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";

const CalendarList = () => {
  const [isCalendarOpen, setIsCalendarOpen, dueDate, setDueDate] =
    useAddNotesStore((state) => [
      state.isCalendarOpen,
      state.setIsCalendarOpen,
      state.dueDate,
      state.setDueDate,
    ]);

  const handleCalendarChange = (date) => {
    setDueDate(date);
  };

  return (
    <div className="absolute p-4 bg-red-500">
      <Calendar onChange={handleCalendarChange} value={dueDate} />
      <Icon
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        className="absolute text-sm cursor-pointer top-2 right-2"
        icon={"gg:close"}
      />
      {dueDate && dueDate.toLocaleDateString("en-GB")}
    </div>
  );
};

export default CalendarList;
