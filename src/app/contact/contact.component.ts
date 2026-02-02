import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  // Uncomment for contact-card
  //   // On load the card is closed
  //   isOpen = false;
  //   // When button clikced, open card
  //   toggleCard(event: Event) {
  //     event.stopPropagation();
  //     this.isOpen = !this.isOpen;
  //   }
  //   // When clicKed outside the card, close card
  //   @HostListener('document:click')
  //   closeOnOutsideClick() {
  //     this.isOpen = false;
  //   }
}
