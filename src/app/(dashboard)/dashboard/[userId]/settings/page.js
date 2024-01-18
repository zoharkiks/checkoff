"use client";

import { useSidebarStore } from '@/app/store';
import { useSidebar } from '@/app/utils/useSidebar';
import React from 'react'


const Settings = () => {

  
const [isSidebarOpen, setIsSidebarOpen] = useSidebarStore((state) => [
  state.isSidebarOpen,
  state.setIsSidebarOpen,
]);


useSidebar(setIsSidebarOpen);

  return (
    <div className='padding'>
      <h3 className="text-2xl font-bold">User Settings</h3>
      
      <div className="mt-10 ">
        Under Construction 🏗️🚧
      </div>
    </div>
  )
}

export default Settings