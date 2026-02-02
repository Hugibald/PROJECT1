import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-popup',
  imports: [FormsModule, CommonModule],
  templateUrl: './newsletter-popup.component.html',
  styleUrl: './newsletter-popup.component.css'
})
export class NewsletterPopupComponent {
@Input() visible = false;

// store the values that are typed in the form
formData = { email: ""};

constructor() {
  // load saved data when component starts
  const savedData = localStorage.getItem("newsletterFormData");
  if (savedData) {
    this.formData = JSON.parse(savedData);
  }
}

// when user types, keep saving progress
saveProgress() {
  localStorage.setItem("newsletterFormData", JSON.stringify(this.formData));
}

// closePopup = hide
closePopup() {
  this.visible = false;
  localStorage.setItem("newsletterDismissed", Date.now().toString())
}
// call submitForm when "subscribe" is clicked
submitForm() {
  console.log("Form Data:", this.formData);
  alert("Thank you for subscribing!");
  localStorage.removeItem("newsletterFormData");
  this.closePopup();
}
}
