import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { ReviewsComponent } from './reviews/reviews.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio/:id', component: PortfolioComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'contact', component: ContactComponent },
];
