import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {

  images = [0, 1005, 1025].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(carousel: NgbCarouselConfig) { 
    carousel.interval=2000;
    }
  

  ngOnInit(): void {
  }

}
