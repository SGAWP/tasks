import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton, MatAnchor } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-top-navbar',
  imports: [
    MatIcon,
    MatIconButton,
    MatAnchor,
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    FlexLayoutModule,
  ],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss',
})
export class TopNavbarComponent {
  @Output() open = new EventEmitter<void>();

  onSideNavbarOpen() {
    this.open.emit();
  }
}
