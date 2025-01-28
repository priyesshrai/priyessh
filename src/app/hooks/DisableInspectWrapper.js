"use client";

import { useEffect } from "react";

const DisableInspectWrapper = ({ children }) => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeydown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 85)) || // Ctrl + Shift + I or Ctrl + Shift + U
        (e.ctrlKey && e.keyCode === 85) // Ctrl + U
      ) {
        e.preventDefault();
      }
    };

    const devToolsDetector = () => {
      const threshold = 100;
      const width = window.outerWidth - window.innerWidth > threshold;
      const height = window.outerHeight - window.innerHeight > threshold;

      if (width || height) {
        alert("Developer tools are open!");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeydown);
    window.addEventListener("resize", devToolsDetector);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("resize", devToolsDetector);
    };
  }, []);

  return <>{children}</>;
};

export default DisableInspectWrapper;
