import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/components/page-title/page-title.component';
import { ModalService } from '../../../../core/services/modal.service';
import { AddPersonaNaturalComponent } from '../../components/add-persona-natural/add-persona-natural.component';
import { PersonaNatural } from '../../models/persona-natural.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-persona-natural',
  standalone: true,
  imports: [ PageTitleComponent ],
  templateUrl: './persona-natural.component.html',
  styleUrl: './persona-natural.component.scss'
})
export class PersonaNaturalComponent implements OnInit {

  list: PersonaNatural[] = [];

  constructor(
    private clienteService: ClienteService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList(): void {
    this.clienteService.get().subscribe((response) => {
      console.log(response);
      this.list = response.data;
    });
  }

  /*openModal(id: number | undefined): void {
    this.modalService
      .openModal('Nueva Persona Natural', AddPersonaNaturalComponent, { id: id })
      .then((result: any) => {
        console.log('Datos enviados desde el evento:', result);
        this.fetchList();
      })
      .catch((reason: any) => console.log('Modal cerrado sin confirmar:', reason));
  }*/
  
  openModal(id: number) {
    this.modalService.openModal(AddPersonaNaturalComponent, { title : 'Nueva Persona Natural', size : 'lg' }, { id: id })
    .subscribe({
      next: (action) => {
        console.log('modalAction', action);
        this.fetchList();
      },
      error: (reason: any) => console.log('Modal cerrado sin confirmar:', reason)
    });
  }   
}