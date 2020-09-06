import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [
    'assets/img/Products/room-freshner/scent-wali-room-freshner-aromatic-diffuser-set-room-freshener.jpg',
    'assets/img/Products/room-freshner/scent-wali-room-freshner-green-apple-room-freshener.jpg',
    'assets/img/Products/luxury/scent-wali-luxury-purse-concentrate.jpg',
    'assets/img/Products/eau-de-parfum/scent-wali-eau-de-parfum-30-ml-pomegranate-berry.jpg',
    'assets/img/Products/eau-de-parfum/scent-wali-eau-de-parfum-60-ml-blue-lagoon.jpg',
    'assets/img/Products/after-shave/scent-wali-after-shave-lotion.jpg',
    'assets/img/Products/eau-de-parfum/scent-wali-eau-de-parfum-30-ml-blue-lagoon.jpg',
    'assets/img/Products/eau-de-parfum/scent-wali-eau-de-parfum-60-ml-pomegranate-berry.jpg',
    'assets/img/Products/eau-de-parfum/scent-wali-eau-de-parfum-attar-non-alcoholic-perfume.jpg',
    'assets/img/Products/medi-care/scent-wali-medi-care-herbal-insect-repellent.jpg',
    'assets/img/Products/medi-care/scent-wali-medi-care-roll-on-for-headache.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
