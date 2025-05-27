import React from 'react';
import '../styles/MenuScreen.css';

interface MenuScreenProps {
  onSelectSequence: (sequence: string) => void;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ onSelectSequence }) => {
  const sequences = [
    { id: 'collatz', name: 'COLLATZ' },
    { id: 'fibonacci', name: 'FIBONACCI' },
    { id: 'lucas', name: 'LUCAS' },
    { id: 'tribonacci', name: 'TRIBONACCI' },
    { id: 'pascal', name: 'PASCAL' },
    { id: 'euclidean', name: 'EUCLIDEAN' }
  ];

  return (
    <div className="menu-screen">
      <h2 className="menu-title">SELECT SEQUENCE</h2>
      
      <div className="menu-grid">
        {sequences.map((sequence, index) => (
          <button 
            key={sequence.id}
            className="menu-item"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => onSelectSequence(sequence.id)}
          >
            {sequence.name}
          </button>
        ))}
      </div>
      
      <div className="menu-footer">
        <p className="menu-instructions">USE JOYSTICK TO NAVIGATE, BUTTON TO SELECT</p>
      </div>
    </div>
  );
};

export default MenuScreen;