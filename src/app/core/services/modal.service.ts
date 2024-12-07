import { Injectable, ComponentRef, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalComponentRef?: ComponentRef<ModalComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  open(component: any, data?: any): void {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    this.modalComponentRef = factory.create(this.injector);

    this.appRef.attachView(this.modalComponentRef.hostView);

    const modalElement = (this.modalComponentRef.hostView as any).rootNodes[0];
    document.body.appendChild(modalElement);

    this.modalComponentRef.instance.childComponent = component;
    this.modalComponentRef.instance.data = data;
    this.modalComponentRef.instance.closeModal = () => this.close();
  }

  close(): void {
    if (this.modalComponentRef) {
      this.appRef.detachView(this.modalComponentRef.hostView);
      this.modalComponentRef.destroy();
    }
  }
}
