import { Component, OnInit } from '@angular/core';
import { SocialProfilesService } from 'src/app/modules/shared/social-media/services/social-profile/social-profiles.service';
import { SocialProfile } from 'src/app/modules/shared/social-media/interfaces/SocialProfile';

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

  socialProfiles: SocialProfile[];

  constructor(private socialProfilesService: SocialProfilesService) {
    this.linksToShow = this.navLinks.filter(a => a.show);
    this.promotionalButtonsToShow = this.promotionalButtons.filter(a => a.show);
    this.quickLinks.find(a => a.text === 'Cart').text += " (0)";
    this.quickLinksToShow = this.quickLinks.filter(a => a.show);
    this.socialProfiles = socialProfilesService.getSocialMediaProfiles();
  }

  ngOnInit() {
  }
}
