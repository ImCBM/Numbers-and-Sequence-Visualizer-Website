import { displaySteps, displaySequence } from '../components/sequence';

/**
 * Generate Collatz Sequence from starting number
 * @param n - Starting number
 */
export function generateCollatzSequence(n: number): void {
  let sequence = [n];
  let steps = [];
  
  while (n !== 1) {
    if (n % 2 === 0) {
      const next = n / 2;
      steps.push(`${n} is even, so ${n}/2 = ${next}`);
      n = next;
    } else {
      const next = 3 * n + 1;
      steps.push(`${n} is odd, so 3×${n}+1 = ${next}`);
      n = next;
    }
    sequence.push(n);
  }
  
  displaySteps(steps);
  displaySequence(sequence);
}