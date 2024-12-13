import { Component } from '@angular/core';
import { ModalService } from '../../../../core/services/modal.service';
import { FormTelefonoComponent } from '../../../../shared/components/form-telefono/form-telefono.component';

@Component({
  selector: 'app-add-persona-natural',
  standalone: true,
  imports: [ FormTelefonoComponent ],
  templateUrl: './add-persona-natural.component.html',
  styleUrl: './add-persona-natural.component.scss'
})
export class AddPersonaNaturalComponent {
  constructor(private modalService: ModalService) {}

  openModal(title: string, content: string) {
    this.modalService.open({ title, content });
  }
}
