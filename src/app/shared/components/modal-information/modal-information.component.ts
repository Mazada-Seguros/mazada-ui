import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modal-information',
  standalone: true,
  imports: [],
  templateUrl: './modal-information.component.html',
  styleUrl: './modal-information.component.scss'
})
export class ModalInformationComponent {
  @Input() title!: string;
  @Input() childComponent!: any;
  @Input() data: any;
  @Input() closeModal!: () => void;
  @Input() submit!: (event: Event) => void;

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
