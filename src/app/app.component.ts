import { Component, importProvidersFrom } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BasicIconButtonComponent } from "./components/shared/basic-icon-button/basic-icon-button.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, BasicIconButtonComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'OceanAnalytics';
  isExpanded = false;
  pageTitle: string = 'Ocean Analytics';

  private pageTitles: { [key: string]: string } = {
    '/home': 'Home',
    '/map': 'Map View',
    '/migration': 'Migration View',
    '/wiki': 'Wiki & Resources'
  };

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pageTitle = this.pageTitles[event.url] || 'Ocean Analytics';
      }
    });
  }

  constructor(private router: Router) {}

  toggleSidebar(sidenav: any) {
    this.isExpanded = !this.isExpanded;
    sidenav.toggle();
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  closeSidebar() {
    this.isExpanded = false;
  }
}
