import { Component } from '@angular/core';
import { ModalService } from '../../../../core/services/modal.service';

@Component({
  selector: 'app-add-cliente',
  standalone: true,
  imports: [],
  templateUrl: './add-cliente.component.html',
  styleUrl: './add-cliente.component.scss'
})
export class AddClienteComponent {
  constructor(private modalService: ModalService) {}

  openModal(title: string, content: string) {
    this.modalService.open({ title, content });
  }
}
