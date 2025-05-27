import React, { ReactNode, useRef } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import '../styles/ArcadeCabinet.css';

interface ArcadeCabinetProps {
  children: ReactNode;
}

export const ArcadeCabinet: React.FC<ArcadeCabinetProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'up' | 'down') => {
    if (!contentRef.current) return;
    
    const scrollAmount = window.innerHeight * 2; // 30% of viewport height
    const currentScroll = contentRef.current.scrollTop;
    const targetScroll = direction === 'up' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;
    
    contentRef.current.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className="arcade-cabinet">
      <div className="cabinet-top">
        <h1 className="cabinet-title">NUMBER SEQUENCES</h1>
      </div>
      <div className="screen-container">
        <div className="screen-bezel">
          <div className="screen" ref={contentRef}>
            <div className="screen-content">
              {children}
            </div>
            <div className="scanlines"></div>
            <div className="screen-glow"></div>
          </div>
        </div>
      </div>
      <div className="cabinet-controls">
        <div className="joystick">
          <div className="joystick-base"></div>
          <div className="joystick-stick"></div>
        </div>
        <div className="buttons-container">
          <div className="buttons">
            <button 
              className="button button-red" 
              onClick={() => handleScroll('up')}
              aria-label="Scroll Up"
            >
              <ChevronUp className="button-icon" size={16} />
            </button>
            <button 
              className="button button-blue" 
              onClick={() => handleScroll('down')}
              aria-label="Scroll Down"
            >
              <ChevronDown className="button-icon" size={16} />
            </button>
          </div>
          <div className="button-labels">
            <span className="button-label">UP</span>
            <span className="button-label">DOWN</span>
          </div>
        </div>
      </div>
    </div>
  );
};