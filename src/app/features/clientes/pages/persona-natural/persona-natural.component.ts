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

  openModal(id: number | undefined): void {
    this.modalService.open(AddPersonaNaturalComponent, "Nueva Persona Natural", { id : id });
    this.fetchList();
  }
}