import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-telefono',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './form-telefono.component.html',
  styleUrl: './form-telefono.component.scss'
})
export class FormTelefonoComponent {
  @Input() phones: { number: string; type: string }[] = [
    { number: '', type: '' }, // Iniciar con un campo vacío
  ];

  // Agregar un nuevo teléfono
  addPhone() {
    this.phones.push({ number: '', type: '' });
  }

  // Eliminar un teléfono por índice
  removePhone(index: number) {
    this.phones.splice(index, 1);
  }

  // Enviar los datos
  onSubmit() {
    console.log('Datos enviados:', this.phones);
  }
}
