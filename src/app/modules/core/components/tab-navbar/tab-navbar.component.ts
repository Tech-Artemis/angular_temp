import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { link } from 'fs';

@Component({
  selector: 'tab-navbar',
  templateUrl: './tab-navbar.component.html',
  styleUrls: ['./tab-navbar.component.scss']
})
export class TabNavbarComponent implements OnInit {

  private navLinks: any[] = [
    { text: 'Home', url: '/home', show: true, inactiveIcon: 'home_hollow', activeIcon: 'home_colored' },
    { text: 'Search', url: '/search', show: true, inactiveIcon: 'search_glass_hollow', activeIcon: 'search_glass_colored' },
    { text: 'Cart', url: '/cart', show: true, inactiveIcon: 'cart_hollow', activeIcon: 'cart_colored' },
    { text: 'Account', url: '/checkout', show: true, inactiveIcon: 'user_circled_hollow', activeIcon: 'user_circled_colored' },
  ];

  linksToShow: any[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        let matchedRouteConfig = this.router.config.find(config => event.url.includes(config.path));
        this.linksToShow = this.navLinks.filter(a => a.show)
          .map(link => {
            return {
              text: link.text,
              url: link.url,
              icon: link.url === '/' + matchedRouteConfig.path ? link.activeIcon : link.inactiveIcon
            };
          });
      });
  }
}
