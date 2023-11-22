import { useEffect } from 'react';
 

export const useSidebar = (setIsSidebarOpen) => {
    useEffect(() => {
        const handleResize = () => {
          setIsSidebarOpen(window.innerWidth > 768); // Adjust the breakpoint as needed
        };
    
        // Initial setup
        handleResize();
    
        // Listen for resize events
        window.addEventListener('resize', handleResize);
    
        return () => {
          // Cleanup: remove event listener on unmount
          window.removeEventListener('resize', handleResize);
        };
      }, [setIsSidebarOpen]);
     
}