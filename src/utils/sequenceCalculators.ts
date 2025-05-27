import { SequenceResult } from '../types/sequences';

export function generateCollatz(n: number): SequenceResult {
  let sequence = [n];
  let steps: string[] = [];
  
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
  
  return {
    steps,
    values: `<div class="sequence-box">
      <h4>Final Sequence:</h4>
      <div class="sequence-values">[${sequence.join(', ')}]</div>
      <h4>Calculation Steps:</h4>
      <div class="calculation-steps">${steps.join('<br>')}</div>
    </div>`
  };
}

export function generateFibonacci(count: number): SequenceResult {
  let sequence = count >= 1 ? [0] : [];
  if (count >= 2) sequence.push(1);
  
  let steps: string[] = [];
  
  for (let i = 2; i < count; i++) {
    const next = sequence[i-1] + sequence[i-2];
    steps.push(`F(${i+1}) = F(${i}) + F(${i-1}) = ${sequence[i-1]} + ${sequence[i-2]} = ${next}`);
    sequence.push(next);
  }
  
  return {
    steps,
    values: `<div class="sequence-box">
      <h4>Final Sequence:</h4>
      <div class="sequence-values">[${sequence.join(', ')}]</div>
      <h4>Calculation Steps:</h4>
      <div class="calculation-steps">${steps.join('<br>')}</div>
    </div>`
  };
}

export function generateLucas(count: number): SequenceResult {
  let sequence = count >= 1 ? [2] : [];
  if (count >= 2) sequence.push(1);
  
  let steps: string[] = [];
  
  for (let i = 2; i < count; i++) {
    const next = sequence[i-1] + sequence[i-2];
    steps.push(`L(${i+1}) = L(${i}) + L(${i-1}) = ${sequence[i-1]} + ${sequence[i-2]} = ${next}`);
    sequence.push(next);
  }
  
  return {
    steps,
    values: `<div class="sequence-box">
      <h4>Final Sequence:</h4>
      <div class="sequence-values">[${sequence.join(', ')}]</div>
      <h4>Calculation Steps:</h4>
      <div class="calculation-steps">${steps.join('<br>')}</div>
    </div>`
  };
}

export function generateTribonacci(count: number): SequenceResult {
  let sequence = count >= 1 ? [0] : [];
  if (count >= 2) sequence.push(1);
  if (count >= 3) sequence.push(1);
  
  let steps: string[] = [];
  
  for (let i = 3; i < count; i++) {
    const next = sequence[i-1] + sequence[i-2] + sequence[i-3];
    steps.push(`T(${i+1}) = T(${i}) + T(${i-1}) + T(${i-2}) = ${sequence[i-1]} + ${sequence[i-2]} + ${sequence[i-3]} = ${next}`);
    sequence.push(next);
  }
  
  return {
    steps,
    values: `<div class="sequence-box">
      <h4>Final Sequence:</h4>
      <div class="sequence-values">[${sequence.join(', ')}]</div>
      <h4>Calculation Steps:</h4>
      <div class="calculation-steps">${steps.join('<br>')}</div>
    </div>`
  };
}

export function generatePascal(rows: number): SequenceResult {
  let triangle: number[][] = [];

  // Generate the triangle
  for (let row = 0; row < rows; row++) {
    let currentRow: number[] = [];
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        currentRow.push(1);
      } else {
        const value = triangle[row-1][col-1] + triangle[row-1][col];
        currentRow.push(value);
      }
    }
    triangle.push(currentRow);
  }

  // Calculate maximum width for centering
  const maxWidth = triangle[triangle.length - 1].length;

  // Build responsive triangle display with row numbers and centered values
  let triangleHtml = '<div class="pascal-triangle">';
  for (let i = 0; i < triangle.length; i++) {
    const rowNumber = i + 1;
    const rowClass = rowNumber % 2 === 0 ? 'even-row' : 'odd-row';
    const padding = maxWidth - triangle[i].length;
    const paddingLeft = Math.floor(padding / 2);
    
    triangleHtml += `
      <div class="pascal-row ${rowClass}">
        <span class="row-number">Row ${rowNumber}</span>
        <div class="row-values" style="padding-left: ${paddingLeft * 48}px">
          ${triangle[i].map(value => `<span class="pascal-value">${value}</span>`).join('')}
        </div>
      </div>`;
  }
  triangleHtml += '</div>';

  return {
    steps: [],
    values: triangleHtml
  };
}

export function calculateGCD(a: number, b: number): SequenceResult {
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
  
  return {
    steps,
    values: `<div class="sequence-box">
      <h4>Final Result:</h4>
      <div class="sequence-values">The Greatest Common Divisor of ${originalA} and ${originalB} is ${a}</div>
      <h4>Calculation Steps:</h4>
      <div class="calculation-steps">${steps.join('<br>')}</div>
    </div>`
  };
}