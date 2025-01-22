import React, { useState, useEffect } from 'react';

const AnimatedThreeDText = ({ text, className }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const getTransform = (index) => {
      if (activeIndex === null) return '';
      
      // Calculate distance from active letter
      const distance = Math.abs(index - activeIndex);
      
      // Maximum rotation for the active letter
      const baseRotation = 30;
      
      // Nearby letters rotate less based on distance
      const rotation = baseRotation * Math.max(0, 1 - distance * 0.3);
      
      return `
        rotateX(${rotation}deg)
        rotateY(${rotation}deg)
        translateZ(${rotation}px)
      `;
    };

  return (
    <div className="inline-block" style={{ perspective: '1000px' }}>
      <div className="flex gap-2 leading-none">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className="relative font-black specal transition-all duration-300 leading-[0.5]"
            style={{
              transform: getTransform(index),
              transformStyle: 'preserve-3d',
              textShadow: activeIndex === index 
                ? '0 0 20px rgba(0,0,0,0.5)' 
                : '2px 2px 4px rgba(0,0,0,0.2)',
              color: activeIndex === index ? '#4a90e2' : '#000',
              lineHeight: '0.1',
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {letter}
            {/* Create 3D depth effect */}
            <div
              className="absolute inset-0"
              style={{
                transform: 'translateZ(-10px)',
                color: '#ccc',
                textShadow: 'none',
                lineHeight: '0.1',
              }}
            >
              {letter}
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedThreeDText;
