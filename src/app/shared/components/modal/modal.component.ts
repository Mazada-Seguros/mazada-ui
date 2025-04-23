import { 
  Component, 
  ComponentRef, 
  EventEmitter, 
  Input, 
  Output, 
  Type, 
  ViewChild, 
  ViewContainerRef 
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() title? : string;
  
  @Output() submitEvent = new EventEmitter<void>();
  @Output() closeEvent = new EventEmitter<void>();

  @ViewChild('dynamicContent', { read: ViewContainerRef , static: true }) dynamicContent!: ViewContainerRef;

  childComponentInstance!: any; // Referencia al componente dinámico
  private componentRef!: ComponentRef<any>;

  loadComponent<T>(component: Type<T>, data?: any): void {
    this.dynamicContent.clear();
    this.componentRef = this.dynamicContent.createComponent(component);

    this.childComponentInstance = this.componentRef.instance;

    // Pasar datos iniciales al componente dinámico
    if (data) {
      Object.assign(this.childComponentInstance, data);
    }
  }

  submit(): void {
    const result = this.childComponentInstance?.onSubmit(); // Ejecutar lógica en componente dinámico
    this.submitEvent.emit(result); // Emitir resultado
  }

  close(): void {
    this.closeEvent.emit(); // Cerrar el modal
  }
}