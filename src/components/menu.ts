import { showScreen } from '../utils/navigation';
import { setupSequenceScreen } from './sequence';

export function initMenuScreen(): void {
  const sequenceBtns = document.querySelectorAll('.sequence-btn');
  const creditsBtns = document.querySelectorAll('#credits-btn, #credits-btn-2');
  const exitBtns = document.querySelectorAll('#exit-btn, #exit-btn-2');
  
  sequenceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const sequenceType = target.getAttribute('data-sequence');
      
      if (sequenceType) {
        setupSequenceScreen(sequenceType);
        showScreen('sequence-screen');
      }
    });
  });

  creditsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showScreen('welcome-screen');
    });
  });

  exitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showScreen('welcome-screen');
    });
  });
}