import { displaySteps, displaySequence } from '../components/sequence';

/**
 * Generate Tribonacci Sequence
 * @param count - Number of terms to generate
 */
export function generateTribonacciSequence(count: number): void {
  let sequence = count >= 1 ? [0] : [];
  if (count >= 2) sequence.push(1);
  if (count >= 3) sequence.push(1);
  
  let steps = [];
  
  for (let i = 3; i < count; i++) {
    const next = sequence[i-1] + sequence[i-2] + sequence[i-3];
    steps.push(`T(${i+1}) = T(${i}) + T(${i-1}) + T(${i-2}) = ${sequence[i-1]} + ${sequence[i-2]} + ${sequence[i-3]} = ${next}`);
    sequence.push(next);
  }
  
  displaySteps(steps);
  displaySequence(sequence);
}