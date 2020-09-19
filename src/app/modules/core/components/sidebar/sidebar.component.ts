import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  private navLinks: any[] = [
    { text: 'Home', url: '#', show: true },
    { text: 'Shop', url: '#', show: true },
    { text: 'Product', url: '#', show: true },
    { text: 'Checkout', url: '#', show: false },
  ];

  linksToShow: any[];

  private promotionalButtons: any[] = [
    { id: 1, text: '%Discount%', url: '#', show: false },
    { id: 2, text: 'New this week', url: '#', show: false },
  ];

  promotionalButtonsToShow: any[];

  defaultActivePromotionButton = 2;

  private quickLinks: any[] = [
    {
      text: 'Cart', url: '#', show: false, imageUrl: 'assets/img/core-img/cart.png',
      cssClass: { 'cart-nav': true }
    },
    {
      text: 'Favorites', url: '#', show: true, imageUrl: 'assets/img/core-img/favorites.png',
      cssClass: { 'fav-nav': true }
    },
    {
      text: 'Search', url: '#', show: true, imageUrl: 'assets/img/core-img/search.png',
      cssClass: { 'search-nav': true }
    },
  ];

  quickLinksToShow: any[];

  private socialMediaUrls = [
    { name: 'instagram', url: 'https://www.instagram.com/' },
    { name: 'twitter', url: 'https://twitter.com/' },
    { name: 'github', url: 'https://www.github.com/' },
    { name: 'facebook', url: 'https://www.facebook.com/' }
  ];

  private socialMediaProfiles: any[] = [
    {
      name: "instagram",
      profileId: "mphlix",
      iconClass: "fa fa-instagram fa-3x"
    },
    {
      name: "twitter",
      profileId: "MphlixSoapworks",
      iconClass: "fa fa-twitter fa-3x"
    },
    {
      name: "facebook",
      profileId: "MPhlix-158263684780140",
      iconClass: "fa fa-facebook fa-3x"
    }
  ];

  socialMediaProfilesToShow: any[];

  constructor() {
    this.linksToShow = this.navLinks.filter(a => a.show);
    this.promotionalButtonsToShow = this.promotionalButtons.filter(a => a.show);
    this.quickLinks.find(a => a.text === 'Cart').text += " (0)";
    this.quickLinksToShow = this.quickLinks.filter(a => a.show);
    this.socialMediaProfilesToShow = this.socialMediaProfiles.map(profile => {
      return { iconClass: profile.iconClass, url: this.socialMediaUrls.find(a => a.name === profile.name).url + profile.profileId };
    });
  }

  ngOnInit() {
  }
}
