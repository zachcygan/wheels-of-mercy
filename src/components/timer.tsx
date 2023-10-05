import React, { useState, useEffect } from 'react';

let clickTimer: number | null = null;

export default function TripleClickComponent() {
  const [clickCount, setClickCount] = useState<number>(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    if (clickCount === 1) {
      // Start a timer
      clickTimer = window.setTimeout(() => {
        // Reset click count after timeout
        setClickCount(0);
      }, 300);  // Adjust timeout to desired triple-click speed
    }
    
    if (clickCount === 3) {
      // Triple click detected
      console.log('Triple click!');
      
      // Reset click count and clear timer
      setClickCount(0);
      if (clickTimer !== null) {
        window.clearTimeout(clickTimer);
      }
    }
    
    return () => {
      // Clear timer on component unmount
      if (clickTimer !== null) {
        window.clearTimeout(clickTimer);
      }
    };
  }, [clickCount]);

  return (
    <div onClick={handleClick}>
      Click me
    </div>
  );
}