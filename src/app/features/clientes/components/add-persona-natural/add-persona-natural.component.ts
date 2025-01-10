import { Component } from '@angular/core';
import { ModalService } from '../../../../core/services/modal.service';
import { FormTelefonoComponent } from '../../../../shared/components/form-telefono/form-telefono.component';
import { PersonaNatural } from '../../models/persona-natural.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-add-persona-natural',
  standalone: true,
  imports: [ 
    ReactiveFormsModule ,
    FormTelefonoComponent 
  ],
  templateUrl: './add-persona-natural.component.html',
  styleUrl: './add-persona-natural.component.scss'
})
export class AddPersonaNaturalComponent {
  
  id: number = 0
  persona: PersonaNatural | undefined;
  form!: FormGroup;

  phones: { number: string; type: string }[] = [
    { number: '', type: '' }, // Iniciar con un campo vacío
  ];

  constructor(
    private clienteService: ClienteService,
    private modalService: ModalService,
    private fb: FormBuilder
  ) {
    this.modalService.action = this.onSubmit.bind(this);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tipoDeIdentificacion: ['', [Validators.required]],
      numeroDeIdentificacion: ['', [Validators.required]],
      primerNombre: ['', [Validators.required]],
      segundoNombre: [''],
      primerApellido: ['', [Validators.required]],
      segundoApellido: [''],
      nombreCorto: [''],
      tipoDeCorreoElectronico: [''],
      correoElectronico: ['', [Validators.email]]
    });

    if(this.id != 0) {
      this.fetchPersonaNatural();
    }
  }

  openModal(title: string, content: string) {
    this.modalService.open({ content }, title);
  }

  fetchPersonaNatural() {
    this.clienteService.getById(this.id)
    .subscribe((response) => {
      console.log(response);
      this.form.patchValue(response.data);
      //this.form.get('tipoDeIdentificacion')?.setValue(response.data.tipoDeIdentificacion);
      this.phones = [
        { number: response.data.numeroDeTelefono, type: response.data.tipoDeTelefono }, // Iniciar con un campo vacío
      ];
    });
  }


  onSubmit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const person = this.form.value as PersonaNatural;
      person.id = this.id;
      if (this.phones.length > 0) {
        person.numeroDeTelefono = this.phones[0].number;
        person.tipoDeTelefono = this.phones[0].type;
      }
      this.clienteService.post(person)
        .subscribe(response => {
          console.log(response);
      });
    } else {
       // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')
      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.classList.add('was-validated')
      });
    }
  }
}
