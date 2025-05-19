import './style.css';
import { initNavigation } from './utils/navigation';
import { initWelcomeScreen } from './components/welcome';
import { initMenuScreen } from './components/menu';
import { initSequenceScreen } from './components/sequence';

// Initialize all application components
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initWelcomeScreen();
  initMenuScreen();
  initSequenceScreen();
});