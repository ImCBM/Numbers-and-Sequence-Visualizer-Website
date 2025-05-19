// Screen navigation utilities
const screens = ['welcome-screen', 'menu-screen', 'sequence-screen'];

/**
 * Shows a specific screen and hides others
 * @param screenId - The ID of the screen to show
 */
export function showScreen(screenId: string): void {
  if (!screens.includes(screenId)) {
    console.error(`Invalid screen ID: ${screenId}`);
    return;
  }
  
  document.querySelectorAll('.screen').forEach(screen => {
    if (screen.id === screenId) {
      screen.classList.add('active');
    } else {
      screen.classList.remove('active');
    }
  });
}

/**
 * Initialize navigation related event listeners
 */
export function initNavigation(): void {
  // Navigation events are set up in their respective component files
  console.log('Navigation initialized');
}