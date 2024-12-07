import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/components/page-title/page-title.component';

@Component({
  selector: 'app-list-leads',
  standalone: true,
  imports: [ PageTitleComponent ],
  templateUrl: './list-leads.component.html',
  styleUrl: './list-leads.component.scss'
})
export class ListLeadsComponent {

}
