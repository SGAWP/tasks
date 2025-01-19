import { Component, EventEmitter, Output } from '@angular/core';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    MatIconButton,
    MatToolbar,
    RouterLink,
    RouterLinkActive,
    FlexLayoutModule,
  ],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss',
})
export class SideNavbarComponent {
  @Output() close = new EventEmitter<void>();

  onSideNavbarClose() {
    this.close.emit();
  }
}
