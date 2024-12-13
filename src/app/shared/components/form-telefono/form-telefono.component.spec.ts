import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTelefonoComponent } from './form-telefono.component';

describe('FormTelefonoComponent', () => {
  let component: FormTelefonoComponent;
  let fixture: ComponentFixture<FormTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTelefonoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
