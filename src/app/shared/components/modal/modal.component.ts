import { 
  Component, 
  ComponentFactoryResolver, 
  Input, 
  OnInit, 
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
export class ModalComponent implements OnInit {
  @Input() title!: string;
  @Input() childComponent!: any;
  @Input() data: any;
  @Input() closeModal!: () => void;

  @ViewChild('dynamicContent', { read: ViewContainerRef, static: true })
  dynamicContent!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    if (this.childComponent) {
      const factory = this.resolver.resolveComponentFactory(this.childComponent);
      const componentRef = this.dynamicContent.createComponent(factory);
      if (this.data) {
        Object.assign(componentRef.instance as any, this.data);
      }
    }
  }
}