import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { RightSidebarComponent } from '../../shared/components/right-sidebar/right-sidebar.component';
import { TopbarComponent } from '../../shared/components/topbar/topbar.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterModule,
    MenuComponent,
    RightSidebarComponent,
    TopbarComponent,
    FooterComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
}