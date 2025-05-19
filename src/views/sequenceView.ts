export class SequenceView {
  static updateSequenceScreen(title: string, description: string): void {
    const sequenceTitle = document.getElementById('sequence-title');
    const sequenceDescription = document.getElementById('sequence-description');
    
    if (sequenceTitle) sequenceTitle.textContent = title;
    if (sequenceDescription) sequenceDescription.textContent = description;
  }

  static showCredits(): void {
    const creditsContent = `
      <div class="credits-content">
        <h3>Credits</h3>
        <p>Created by:</p>
        <ul>
          <li>Alto, Eufredo</li>
          <li>Bautista, Wimari</li>
          <li>Magtajas, Chester</li>
        </ul>
        <p>© 2025 All rights reserved</p>
      </div>
    `;

    const toast = document.getElementById('toast');
    if (toast) {
      toast.innerHTML = creditsContent;
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 5000);
    }
  }
}