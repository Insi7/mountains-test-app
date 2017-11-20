import {Component, OnInit} from '@angular/core';

interface NavItem {
  routerLinkPath: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    routerLinkPath: '/top-mountains',
    label: 'Top'
  },
  {
    routerLinkPath: '/mountains',
    label: 'All'
  }
];

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html'
})
export class AppPageNavComponent implements OnInit {

  public navItems: NavItem[];

  constructor() {
  }

  ngOnInit() {
    this.navItems = NAV_ITEMS;
  }

}
