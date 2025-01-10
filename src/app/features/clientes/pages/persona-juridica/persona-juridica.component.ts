import { Component } from '@angular/core';
import { EmpresaService } from '../../services/empresa.service';
import { ModalService } from '../../../../core/services/modal.service';
import { PersonaJuridica } from '../../models/persona-juridica.model';
import { AddPersonaJuridicaComponent } from '../../components/add-persona-juridica/add-persona-juridica.component';
import { PageTitleComponent } from '../../../../shared/components/page-title/page-title.component';

@Component({
  selector: 'app-persona-juridica',
  standalone: true,
  imports: [ PageTitleComponent ],
  templateUrl: './persona-juridica.component.html',
  styleUrl: './persona-juridica.component.scss'
})
export class PersonaJuridicaComponent {
  list: PersonaJuridica[] = [];

  constructor(
    private empresaService: EmpresaService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList(): void {
    this.empresaService.get().subscribe((response) => {
      console.log(response);
      this.list = response.data;
    });
  }

  openModal(): void {
    this.modalService.open(AddPersonaJuridicaComponent, "Nueva Persona Juridica");
  }
}
