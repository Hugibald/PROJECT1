import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsletterPopupComponent } from './newsletter-popup/newsletter-popup.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    // ContactComponent, //uncomment this for contact card
    NewsletterPopupComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PhotoApp';

  // controls if newsletter popup is visible or not
  showNewsletter = false;
  constructor(private router: Router) {
    // constructor runs once when comp is created
    // and injecting angular router to detect page changes

    this.router.events.subscribe((event) => {
      // check if page changed / hide newsletter if it was just closed
      if (event instanceof NavigationEnd) {
        this.showNewsletter = false;

        // wiat 2 seconds after page change before popup again
        setTimeout(() => {
          // getting timestamp when user last dismissed popup
          // stores in browser storage
          const lastDismissed = localStorage.getItem('newsletterDismissed');

          // current time in milliseconds, since 1st january 1970
          // to calculate how much time has passed
          const now = Date.now();

          // infinity = if user has never dismissed it - show immediately
          const elapsed = lastDismissed
            ? now - Number(lastDismissed)
            : Infinity;

          // if more than 20 seconds, show it again
          if (elapsed > 20 * 1000) {
            this.showNewsletter = true;
          }
        }, 2000); // wait two seconds after navigation before checking
      }
    });
  }
}
