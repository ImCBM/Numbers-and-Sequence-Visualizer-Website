import React, { useState } from 'react';
import { 
  generateCollatz, 
  generateFibonacci, 
  generateLucas, 
  generateTribonacci, 
  generatePascal, 
  calculateGCD 
} from '../utils/sequenceCalculators';
import { SequenceConfig } from '../types/sequences';
import '../styles/SequenceScreen.css';

interface SequenceScreenProps {
  sequence: string;
  onBack: () => void;
}

const SequenceScreen: React.FC<SequenceScreenProps> = ({ sequence, onBack }) => {
  const [input, setInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [result, setResult] = useState<{ steps: string[], values: string }>({ steps: [], values: '' });
  const [error, setError] = useState('');

  const sequenceConfig: Record<string, SequenceConfig> = {
    collatz: {
      title: 'COLLATZ SEQUENCE',
      description: 'For even numbers n, the next term is n/2. For odd n, the next term is 3n+1. The sequence continues until it reaches 1.',
      inputLabel: 'Enter a positive integer',
      needsSecondInput: false,
      secondInputLabel: '',
      minValue: 1
    },
    fibonacci: {
      title: 'FIBONACCI SEQUENCE',
      description: 'Each number is the sum of the two preceding ones, starting from 0 and 1.',
      inputLabel: 'Enter how many terms to generate',
      needsSecondInput: false,
      secondInputLabel: '',
      minValue: 3
    },
    lucas: {
      title: 'LUCAS SEQUENCE',
      description: 'A variation of Fibonacci starting with 2 and 1.',
      inputLabel: 'Enter how many terms to generate',
      needsSecondInput: false,
      secondInputLabel: '',
      minValue: 1
    },
    tribonacci: {
      title: 'TRIBONACCI SEQUENCE',
      description: 'Each number is the sum of the three preceding ones, starting from 0, 1, and 1.',
      inputLabel: 'Enter how many terms to generate',
      needsSecondInput: false,
      secondInputLabel: '',
      minValue: 3
    },
    pascal: {
      title: 'PASCAL\'S TRIANGLE',
      description: 'Pascal Triangle is a triangular array where each number is the sum of the two numbers directly above it. The edges of the triangle are always 1.',
      inputLabel: 'Enter number of rows to generate',
      needsSecondInput: false,
      secondInputLabel: '',
      minValue: 1
    },
    euclidean: {
      title: 'EUCLIDEAN ALGORITHM',
      description: 'Find the Greatest Common Divisor (GCD) of two numbers.',
      inputLabel: 'Enter first number',
      needsSecondInput: true,
      secondInputLabel: 'Enter second number',
      minValue: 1
    }
  };

  const config = sequenceConfig[sequence];

  const validateInput = (value: string, isSecond = false): number | null => {
    setError('');
    const num = parseInt(value);
    
    if (isNaN(num)) {
      setError('Please enter a valid number');
      return null;
    }
    
    if (num < config.minValue) {
      setError(`Please enter a number greater than or equal to ${config.minValue}`);
      return null;
    }
    
    return num;
  };

  const generateSequence = () => {
    const num = validateInput(input);
    if (num === null) return;
    
    let calculationResult;
    
    switch (sequence) {
      case 'collatz':
        calculationResult = generateCollatz(num);
        break;
      case 'fibonacci':
        calculationResult = generateFibonacci(num);
        break;
      case 'lucas':
        calculationResult = generateLucas(num);
        break;
      case 'tribonacci':
        calculationResult = generateTribonacci(num);
        break;
      case 'pascal':
        calculationResult = generatePascal(num);
        break;
      case 'euclidean':
        const secondNum = validateInput(secondInput, true);
        if (secondNum === null) return;
        if (num === secondNum) {
          setError('Numbers cannot be identical');
          return;
        }
        calculationResult = calculateGCD(num, secondNum);
        break;
      default:
        return;
    }
    
    setResult(calculationResult);
  };

  return (
    <div className="sequence-screen">
      <div className="sequence-header">
        <h2 className="sequence-title">{config.title}</h2>
        <button className="back-button" onClick={onBack}>BACK</button>
      </div>
      
      <p className="sequence-description">{config.description}</p>
      
      <div className="input-section">
        <div className="input-field">
          <label htmlFor="main-input">{config.inputLabel}</label>
          <input
            id="main-input"
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="arcade-input"
          />
        </div>
        
        {config.needsSecondInput && (
          <div className="input-field">
            <label htmlFor="second-input">{config.secondInputLabel}</label>
            <input
              id="second-input"
              type="number"
              value={secondInput}
              onChange={(e) => setSecondInput(e.target.value)}
              className="arcade-input"
            />
          </div>
        )}
        
        <button 
          className="generate-button" 
          onClick={generateSequence}
        >
          GENERATE
        </button>
        
        {error && <div className="error-message">{error}</div>}
      </div>
      
      {(result.steps.length > 0 || result.values) && (
        <div className="results-container">
          <div className="results-grid">
            <div className="result-section">
              <h3>SEQUENCE VALUES:</h3>
              <div 
                className="scrollable-results values"
                dangerouslySetInnerHTML={{ __html: result.values }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SequenceScreen;