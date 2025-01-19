import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MatSidenav,
  MatSidenavContent,
  MatSidenavContainer,
} from '@angular/material/sidenav';
import { SideNavbarComponent, TopNavbarComponent } from './layout';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TopNavbarComponent,
    SideNavbarComponent,
    MatSidenavContent,
    MatSidenav,
    MatSidenavContainer,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('sidenav')
  public sidenav: MatSidenav = new MatSidenav();

  openSideNavbar() {
    this.sidenav.open();
  }

  closeSideNavbar() {
    this.sidenav.close();
  }
}
