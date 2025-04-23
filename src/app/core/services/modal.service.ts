import { Injectable, Type } from '@angular/core';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {  
  
  private modalRef!: NgbModalRef;
  private modalNotifier?: Subject<string>;

  constructor(private modalService: NgbModal) {}

  openModal<T>(
    component: Type<T>, 
    options?: { title: string, size?: any },
    data?: any
  ) {
    this.modalRef = this.modalService.open(ModalComponent, { size: options?.size });
    const modalInstance = this.modalRef.componentInstance as ModalComponent;

    modalInstance.title = options?.title;

    modalInstance.submitEvent.subscribe();
    modalInstance.closeEvent.subscribe(() => this.close());

    modalInstance.loadComponent(component, data);      

    this.modalNotifier = new Subject();
    return this.modalNotifier?.asObservable();
  }

  close(): void {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }

  dismiss(): void {
    if (this.modalRef) {
      this.modalRef.dismiss();
    }
  }

  /*submitModal() {
    this.modalNotifier?.next('confirm');
    this.close();
  }*/
}
