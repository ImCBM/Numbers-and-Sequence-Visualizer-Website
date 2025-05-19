import { displayCustomResult } from '../components/sequence';

export function generatePascalTriangle(rows: number): void {
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

  // Create HTML for the triangle
  let htmlContent = '<div class="pascal-container">';
  for (let i = 0; i < triangle.length; i++) {
    htmlContent += `
      <div class="pascal-row">
        <div class="row-header">Row ${i}</div>
        <div class="row-content" style="max-height: none; padding: 0 15px 15px;">
          ${triangle[i].map(num => 
            `<span class="pascal-number">${num}</span>`
          ).join('')}
        </div>
      </div>`;
  }
  htmlContent += '</div>';

  displayCustomResult(htmlContent);
}