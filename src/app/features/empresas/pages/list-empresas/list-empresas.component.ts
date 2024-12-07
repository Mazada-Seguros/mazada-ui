import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/components/page-title/page-title.component';

@Component({
  selector: 'app-list-empresas',
  standalone: true,
  imports: [ PageTitleComponent ],
  templateUrl: './list-empresas.component.html',
  styleUrl: './list-empresas.component.scss'
})
export class ListEmpresasComponent {

}
