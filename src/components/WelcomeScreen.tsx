import React, { useEffect, useState } from 'react';
import '../styles/WelcomeScreen.css';

interface WelcomeScreenProps {
  onContinue: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue }) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showAuthors, setShowAuthors] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Sequential animations
    const titleTimer = setTimeout(() => setShowTitle(true), 500);
    const authorsTimer = setTimeout(() => setShowAuthors(true), 1500);
    const buttonTimer = setTimeout(() => setShowButton(true), 2500);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(authorsTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="welcome-screen">
      <div className={`welcome-title ${showTitle ? 'visible' : ''}`}>
        <h1>NUMBER SEQUENCES</h1>
        <div className="title-underline"></div>
      </div>
      
      <div className={`welcome-authors ${showAuthors ? 'visible' : ''}`}>
        <p className="created-by">CREATED BY:</p>
        <p className="authors">
          ALTO, EUFREDO<br />
          BAUTISTA, WIMARI<br />
          MAGTAJAS, CHESTER
        </p>
      </div>
      
      <div className={`welcome-button ${showButton ? 'visible' : ''}`}>
        <button className="arcade-button" onClick={onContinue}>
          INSERT COIN
          <span className="blink">[PRESS START]</span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;