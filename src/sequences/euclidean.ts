import { displaySteps, displayCustomResult } from '../components/sequence';

/**
 * Calculate Greatest Common Divisor using Euclidean algorithm
 * @param a - First number
 * @param b - Second number
 */
export function calculateGCD(a: number, b: number): void {
  const originalA = a;
  const originalB = b;
  let steps: string[] = [];
  
  while (b !== 0) {
    const remainder = a % b;
    steps.push(`${a} = ${b} × ${Math.floor(a/b)} + ${remainder}`);
    a = b;
    b = remainder;
  }
  
  steps.push(`GCD(${originalA}, ${originalB}) = ${a}`);
  
  displaySteps(steps);
  
  const htmlContent = `
    <style>
      .gcd-result {
        font-size: 18px;
        padding: 15px;
        background-color: #eaf6fb;
        border-radius: 8px;
        display: inline-block;
        animation: highlight 1s ease;
      }
      @keyframes highlight {
        0% { background-color: #5B6BBF; color: white; }
        100% { background-color: #eaf6fb; color: #333; }
      }
    </style>
    <div class="gcd-result">
      The Greatest Common Divisor of ${originalA} and ${originalB} is ${a}
    </div>
  `;
  
  displayCustomResult(htmlContent);
}