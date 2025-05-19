import { displaySteps, displaySequence } from '../components/sequence';

/**
 * Generate Lucas Sequence
 * @param count - Number of terms to generate
 */
export function generateLucasSequence(count: number): void {
  let sequence = count >= 1 ? [2] : [];
  if (count >= 2) sequence.push(1);
  
  let steps = [];
  
  for (let i = 2; i < count; i++) {
    const next = sequence[i-1] + sequence[i-2];
    steps.push(`L(${i+1}) = L(${i}) + L(${i-1}) = ${sequence[i-1]} + ${sequence[i-2]} = ${next}`);
    sequence.push(next);
  }
  
  displaySteps(steps);
  displaySequence(sequence);
}