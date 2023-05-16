import { useState, useEffect } from 'react';

interface ClickData {
  x: number;
  y: number;
  color: string;
}

const useClickTracker = () => {
  const [clicks, setClicks] = useState<ClickData[]>([]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const color = "#" + Math.floor(Math.random()*16777215).toString(16);
      const clickData = { x: clientX, y: clientY, color };
      setClicks(prevClicks => [...prevClicks, clickData]);
      if (clicks.length > 0) {
        localStorage.setItem('firstIndex', JSON.stringify(clicks[0]));
        localStorage.setItem('dotsArray', JSON.stringify(clicks));
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [clicks]);

  return {
    clicks, 
    setClicks
  };
};

export default useClickTracker;