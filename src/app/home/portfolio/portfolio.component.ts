import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';
import {
  EffectCoverflow,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper/modules';
import { IPhotos } from '../../portfolio-pictures/iphotos.interface';
import { PHOTOS } from '../../portfolio-pictures/photos';

Swiper.use([EffectCoverflow, Pagination, Navigation, Keyboard]);

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  // Calls the interface
  photo: IPhotos | undefined;
  // That the route is called for each section on it's own
  constructor(private route: ActivatedRoute) {}
  // Creates page on call of id from photos.ts
  ngOnInit() {
    const photoID = Number(this.route.snapshot.params['id']);
    this.photo = PHOTOS.find((p) => p.id === photoID);
  }
  // Code for the swiper
  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      // Code for the buttons
      navigation: {
        prevEl: '.custom-prev',
        nextEl: '.custom-next',
      },
      // Code for the circles
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }
}
