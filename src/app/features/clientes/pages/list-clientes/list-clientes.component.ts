import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/components/page-title/page-title.component';
import { ModalService } from '../../../../core/services/modal.service';
import { AddClienteComponent } from '../../components/add-cliente/add-cliente.component';

@Component({
  selector: 'app-list-clientes',
  standalone: true,
  imports: [ PageTitleComponent ],
  templateUrl: './list-clientes.component.html',
  styleUrl: './list-clientes.component.scss'
})
export class ListClientesComponent {
  
  constructor(private modalService: ModalService) {}

  openModal(): void {
    this.modalService.open(AddClienteComponent, { title: "Nuevo Cliente" });
  }
}
