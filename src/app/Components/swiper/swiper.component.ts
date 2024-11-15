import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements AfterViewInit{
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  swiper!: Swiper;

  slides = [
    { image: "/../assets/images/Slider Image.png", title:'Lorem Ipsum',description:'This is a breathtaking view of the mountains during sunset.'},
    { image: "/../assets/images/Slider Image.png", title:'Lorem Ipsum',description: 'This is a breathtaking view of the mountains during sunset.'},
    { image: "/../assets/images/Slider Image.png", title:'Lorem Ipsum' , description:'This is a breathtaking view of the mountains during sunset.'}
  ];

  ngAfterViewInit() {
    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });

    // Slide to the second image after 2 seconds
    setTimeout(() => {
      this.swiper.slideNext();
    }, 4000);
  }
}