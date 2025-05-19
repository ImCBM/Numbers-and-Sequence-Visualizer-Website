// Input validation utilities
interface ValidationOptions {
  positive?: boolean;
  min?: number;
  max?: number;
}

/**
 * Validate user input for numeric values
 * @param value - The value to validate
 * @param options - Validation options
 * @returns Boolean indicating if value is valid
 */
export function validateInput(value: number, options: ValidationOptions = {}): boolean {
  if (isNaN(value)) {
    showToast('Please enter a valid number');
    return false;
  }
  
  if (options.positive !== undefined && options.positive && value <= 0) {
    showToast('Please enter a positive number (greater than 0)');
    return false;
  }
  
  if (options.min !== undefined && value < options.min) {
    showToast(`Please enter a number greater than or equal to ${options.min}`);
    return false;
  }
  
  if (options.max !== undefined && value > options.max) {
    showToast(`Please enter a number less than or equal to ${options.max}`);
    return false;
  }
  
  return true;
}

/**
 * Display a toast message to the user
 * @param message - The message to display
 * @param duration - How long to show the message (ms)
 */
export function showToast(message: string, duration: number = 3000): void {
  const toast = document.getElementById('toast');
  if (!toast) return;
  
  toast.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, duration);
}