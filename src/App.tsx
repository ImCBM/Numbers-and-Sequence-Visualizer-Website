import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import MenuScreen from './components/MenuScreen';
import SequenceScreen from './components/SequenceScreen';
import { ArcadeCabinet } from './components/ArcadeCabinet';
import './styles/App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'menu' | 'sequence'>('welcome');
  const [currentSequence, setCurrentSequence] = useState<string | null>(null);

  const handleContinue = () => {
    setCurrentScreen('menu');
  };

  const handleSelectSequence = (sequence: string) => {
    setCurrentSequence(sequence);
    setCurrentScreen('sequence');
  };

  const handleBack = () => {
    setCurrentScreen('menu');
  };

  return (
    <div className="app">
      <ArcadeCabinet>
        {currentScreen === 'welcome' && <WelcomeScreen onContinue={handleContinue} />}
        {currentScreen === 'menu' && <MenuScreen onSelectSequence={handleSelectSequence} />}
        {currentScreen === 'sequence' && currentSequence && (
          <SequenceScreen sequence={currentSequence} onBack={handleBack} />
        )}
      </ArcadeCabinet>
    </div>
  );
}

export default App;