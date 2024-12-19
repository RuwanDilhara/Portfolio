import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-button',
  standalone: true,
  imports: [],
  templateUrl: './dark-mode-button.component.html',
  styleUrl: './dark-mode-button.component.css'
})
export class DarkModeButtonComponent {
  isDarkMode = false;

  toggleDarkMode(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.isDarkMode = isChecked;
    if (isChecked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

