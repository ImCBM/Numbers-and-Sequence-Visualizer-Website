export interface SequenceConfig {
  title: string;
  description: string;
  inputLabel: string;
  needsSecondInput: boolean;
  secondInputLabel: string;
  minValue: number;
}

export interface SequenceResult {
  steps: string[];
  values: string;
}