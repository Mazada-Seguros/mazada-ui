import { Component } from '@angular/core';
import { PersonaNatural } from '../../models/persona-natural.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-detail-persona-natural',
  standalone: true,
  imports: [],
  templateUrl: './detail-persona-natural.component.html',
  styleUrl: './detail-persona-natural.component.scss'
})
export class DetailPersonaNaturalComponent {

  id: number = 0;
  nombre: string = '';
  persona: PersonaNatural | undefined;

  constructor(private clienteService: ClienteService) {}

  ngInit() {
    this.fetchPersonaNatural();
  }

  fetchPersonaNatural() {
    this.clienteService.getById(this.id)
    .subscribe((response) => {
      this.nombre = response.data.primerNombre;
      this.nombre += response.data.segundoNombre ? ` ${response.data.segundoNombre}` : '';
      this.nombre += ` ${response.data.primerApellido}`;
      this.nombre += response.data.segundoApellido ? ` ${response.data.segundoApellido}` : '';
      this.persona = response.data;
      console.log(response.data);
    });
  }
}
