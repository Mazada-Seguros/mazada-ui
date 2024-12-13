import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-telefono',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './form-telefono.component.html',
  styleUrl: './form-telefono.component.scss'
})
export class FormTelefonoComponent {
  phoneForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.phoneForm = this.fb.group({
      phones: this.fb.array([this.createPhone()]), // Inicializar con un teléfono
    });
  }

  // Crear un grupo de formulario para cada número de teléfono
  createPhone(): FormGroup {
    return this.fb.group({
      number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Validación de número
      type: ['', Validators.required], // Tipo de teléfono
    });
  }

  // Obtener el array de teléfonos
  get phones(): FormArray {
    return this.phoneForm!.get('phones') as FormArray;
  }

  // Agregar un nuevo campo de teléfono
  addPhone(): void {
    this.phones.push(this.createPhone());
  }

  // Eliminar un campo de teléfono
  removePhone(index: number): void {
    this.phones.removeAt(index);
  }

  // Enviar el formulario
  onSubmit(): void {
    if (this.phoneForm.valid) {
      console.log(this.phoneForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
