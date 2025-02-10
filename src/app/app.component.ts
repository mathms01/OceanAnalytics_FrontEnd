import { Component, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BasicIconButtonComponent } from "./components/shared/basic-icon-button/basic-icon-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, BasicIconButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'OceanAnalytics';
  isExpanded = false;

  toggleSidebar(sidenav: any) {
    this.isExpanded = !this.isExpanded;
    sidenav.toggle();
  }

  closeSidebar() {
    this.isExpanded = false;
  }
}
