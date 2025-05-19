import { showScreen } from '../utils/navigation';
import { validateInput, showToast } from '../utils/validation';

import { generateCollatzSequence } from '../sequences/collatz';
import { generateFibonacciSequence } from '../sequences/fibonacci';
import { generateLucasSequence } from '../sequences/lucas';
import { generateTribonacciSequence } from '../sequences/tribonacci';
import { generatePascalTriangle } from '../sequences/pascal';
import { calculateGCD } from '../sequences/euclidean';

export function initSequenceScreen(): void {
  const backBtn = document.getElementById('back-btn');
  
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      showScreen('menu-screen');
      clearResults();
    });
  }
}

export function setupSequenceScreen(sequenceType: string): void {
  const sequenceTitle = document.getElementById('sequence-title');
  const sequenceDescription = document.getElementById('sequence-description');
  const sequenceInput = document.getElementById('sequence-input') as HTMLInputElement;
  const secondInputContainer = document.getElementById('second-input-container');
  const secondNumber = document.getElementById('second-number') as HTMLInputElement;
  const generateBtn = document.getElementById('generate-btn');
  const resultsContainer = document.getElementById('results-container');
  
  if (!sequenceTitle || !sequenceDescription || !sequenceInput || !secondInputContainer || !generateBtn || !resultsContainer) {
    console.error('Required elements not found');
    return;
  }
  
  let title: string, description: string, placeholder: string;
  secondInputContainer.classList.add('hidden');
  
  switch (sequenceType) {
    case 'collatz':
      title = 'Collatz Sequence';
      description = 'For even numbers n, the next term is n/2. For odd n, the next term is 3n+1. The sequence continues until it reaches 1.';
      placeholder = 'Enter a positive integer';
      showCalculationSteps();
      break;
    case 'fibonacci':
      title = 'Fibonacci Sequence';
      description = 'Each number is the sum of the two preceding ones, starting from 0 and 1.';
      placeholder = 'Enter how many terms to generate';
      showCalculationSteps();
      break;
    case 'lucas':
      title = 'Lucas Sequence';
      description = 'A variation of Fibonacci starting with 2 and 1';
      placeholder = 'Enter how many terms to generate';
      showCalculationSteps();
      break;
    case 'tribonacci':
      title = 'Tribonacci Sequence';
      description = 'Each number is the sum of the three preceding ones, starting from 0, 1, and 1.';
      placeholder = 'Enter how many terms to generate';
      showCalculationSteps();
      break;
    case 'pascal':
      title = 'Pascal\'s Triangle';
      description = 'Pascal Triangle is a triangular array where each number is the sum of the two numbers directly above it.';
      placeholder = 'Enter number of rows to generate';
      hideCalculationSteps();
      break;
    case 'euclidean':
      title = 'Euclidean Algorithm';
      description = 'Find the Greatest Common Divisor (GCD) of two numbers.';
      placeholder = 'Enter first number';
      secondInputContainer.classList.remove('hidden');
      showCalculationSteps();
      break;
    default:
      title = 'Unknown Sequence';
      description = 'Sequence type not recognized.';
      placeholder = 'Enter a number';
  }

  sequenceTitle.textContent = title;
  sequenceDescription.textContent = description;
  sequenceInput.placeholder = placeholder;
  sequenceInput.value = '';
  if (secondNumber) secondNumber.value = '';
  
  generateBtn.onclick = () => generateSequence(sequenceType);
}

function generateSequence(sequenceType: string): void {
  clearResults();
  
  const sequenceInput = document.getElementById('sequence-input') as HTMLInputElement;
  const secondNumber = document.getElementById('second-number') as HTMLInputElement;
  
  if (!sequenceInput) {
    console.error('Sequence input not found');
    return;
  }
  
  const input = parseInt(sequenceInput.value);
  
  switch (sequenceType) {
    case 'collatz':
      if (!validateInput(input, { positive: true })) return;
      generateCollatzSequence(input);
      break;
    case 'fibonacci':
      if (!validateInput(input, { positive: true, min: 3 })) return;
      generateFibonacciSequence(input);
      break;
    case 'lucas':
      if (!validateInput(input, { positive: true })) return;
      generateLucasSequence(input);
      break;
    case 'tribonacci':
      if (!validateInput(input, { positive: true, min: 3 })) return;
      generateTribonacciSequence(input);
      break;
    case 'pascal':
      if (!validateInput(input, { positive: true })) return;
      generatePascalTriangle(input);
      break;
    case 'euclidean':
      if (!secondNumber) {
        console.error('Second input not found');
        return;
      }
      
      const second = parseInt(secondNumber.value);
      if (!validateInput(input, { positive: true }) || !validateInput(second, { positive: true })) return;
      
      if (input === second) {
        showToast('Numbers cannot be identical');
        return;
      }
      
      calculateGCD(input, second);
      break;
    default:
      showToast('Unknown sequence type');
  }
}

function showCalculationSteps(): void {
  const resultsContainer = document.getElementById('results-container');
  if (!resultsContainer) return;
  
  resultsContainer.innerHTML = `
    <div class="results-grid">
      <div class="results-section">
        <h3>Calculation Steps:</h3>
        <div id="calculation-steps" class="scrollable-container"></div>
      </div>
      <div class="results-section">
        <h3>Sequence Values:</h3>
        <div id="sequence-values" class="result-box"></div>
      </div>
    </div>
  `;
}

function hideCalculationSteps(): void {
  const resultsContainer = document.getElementById('results-container');
  if (!resultsContainer) return;
  
  resultsContainer.innerHTML = `
    <div class="results-section">
      <h3>Sequence Values:</h3>
      <div id="sequence-values" class="result-box"></div>
    </div>
  `;
}

export function clearResults(): void {
  const calculationSteps = document.getElementById('calculation-steps');
  const sequenceValues = document.getElementById('sequence-values');
  
  if (calculationSteps) calculationSteps.innerHTML = '';
  if (sequenceValues) sequenceValues.innerHTML = '';
}

export function displaySteps(steps: string[]): void {
  const calculationSteps = document.getElementById('calculation-steps');
  if (calculationSteps) {
    calculationSteps.innerHTML = steps.map(step => `<p>${step}</p>`).join('');
  }
}

export function displaySequence(sequence: number[]): void {
  const sequenceValues = document.getElementById('sequence-values');
  if (sequenceValues) {
    sequenceValues.textContent = `Sequence: [${sequence.join(', ')}]`;
  }
}

export function displayCustomResult(htmlContent: string): void {
  const sequenceValues = document.getElementById('sequence-values');
  if (sequenceValues) {
    sequenceValues.innerHTML = htmlContent;
  }
}