import React, { useEffect } from 'react';

const DisableDevTools = () => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    };

    const preventRightClick = (e) => {
      e.preventDefault();
    };

    const handleCopy = (e) => {
      e.preventDefault(); // Prevent the default copy behavior
      const customText = 'This text is copyrighted. Please do not try to copy it.';
      
      // Use the Clipboard API to write custom text to the clipboard
      if (e.clipboardData) {
        e.clipboardData.setData('text', customText); // Set custom text on clipboard
      } else if (window.clipboardData) { // For older versions of IE
        window.clipboardData.setData('Text', customText);
      }
      
    };

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('contextmenu', preventRightClick);
    document.addEventListener('copy', handleCopy); // Intercept copy event

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('contextmenu', preventRightClick);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return null;
};

export default DisableDevTools;
