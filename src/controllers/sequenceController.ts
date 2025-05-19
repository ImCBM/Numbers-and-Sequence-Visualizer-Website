import { PascalModel } from '../models/sequences';

export class SequenceController {
  static handlePascalGeneration(rows: number): void {
    const result = PascalModel.generate(rows);
    this.displayPascalTriangle(result.values);
  }

  private static displayPascalTriangle(triangle: number[][]): void {
    const sequenceValues = document.getElementById('sequence-values');
    if (!sequenceValues) return;

    let labeledRows = '';
    for (let i = 0; i < triangle.length; i++) {
      labeledRows += `
        <div class="pascal-row" onclick="this.classList.toggle('expanded')">
          <div class="row-header">Row ${i}</div>
          <div class="row-content">
            ${triangle[i].map(num => 
              `<span class="pascal-number">${num}</span>`
            ).join('')}
          </div>
        </div>`;
    }

    sequenceValues.innerHTML = `
      <div class="pascal-container">
        ${labeledRows}
      </div>`;
  }
}