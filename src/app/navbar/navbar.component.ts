import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // Sets page on light-mode on load
  isDarkMode = false;
  // The toggle-button code
  toggleTheme(): void {
    const body = document.body;
    this.isDarkMode =
      body.getAttribute('data-bs-theme') === 'dark' ? false : true;
    body.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light');
  }
  // Scroll to section
  constructor(private router: Router) {}

  scrollToSection(id: string) {
    // If not on the Home page, navigate first
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        this.scrollToElement(id);
      });
    } else {
      this.scrollToElement(id);
    }
  }

  private scrollToElement(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
