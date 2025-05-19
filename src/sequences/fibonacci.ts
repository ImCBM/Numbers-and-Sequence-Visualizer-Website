import { displaySteps, displaySequence } from '../components/sequence';

/**
 * Generate Fibonacci Sequence
 * @param count - Number of terms to generate
 */
export function generateFibonacciSequence(count: number): void {
  let sequence = count >= 1 ? [0] : [];
  if (count >= 2) sequence.push(1);
  
  let steps = [];
  
  for (let i = 2; i < count; i++) {
    const next = sequence[i-1] + sequence[i-2];
    steps.push(`F(${i+1}) = F(${i}) + F(${i-1}) = ${sequence[i-1]} + ${sequence[i-2]} = ${next}`);
    sequence.push(next);
  }
  
  displaySteps(steps);
  displaySequence(sequence);
}