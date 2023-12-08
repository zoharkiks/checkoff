'use client'

import { useSidebarStore, useUserStore } from '@/app/store';
import { useSidebar } from '@/app/utils/useSidebar';
import React from 'react'

const CompletedNotes = () => {

  const [notes, setNotes, tags, setTags, id, setCompletedNotes] = useUserStore(
    (state) => [
      state.notes,
      state.setNotes,
      state.tags,
      state.setTags,
      state.id,
      state.setCompletedNotes,
    ]
  );

  const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [
    state.isSidebarOpen,
    state.setIsSidebarOpen,
  ]);

  useSidebar(setIsSidebarOpen);



  return (
    <div>CompletedNotes</div>
  )
}

export default CompletedNotes