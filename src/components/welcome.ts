import { showScreen } from '../utils/navigation';

/**
 * Initialize the welcome screen component
 */
export function initWelcomeScreen(): void {
  const continueBtn = document.getElementById('continue-btn');
  
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      showScreen('menu-screen');
    });
  }
}