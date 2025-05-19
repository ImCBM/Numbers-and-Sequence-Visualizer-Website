// Sequence Models
export interface SequenceResult {
  values: number[][];
  description: string;
}

export interface SequenceInput {
  value: number;
  secondValue?: number;
}

export class PascalModel {
  static generate(rows: number): SequenceResult {
    let triangle: number[][] = [];

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

    return {
      values: triangle,
      description: "Pascal's Triangle"
    };
  }
}