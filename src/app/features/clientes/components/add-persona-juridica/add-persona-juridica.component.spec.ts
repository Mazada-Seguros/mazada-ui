import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonaJuridicaComponent } from './add-persona-juridica.component';

describe('AddPersonaJuridicaComponent', () => {
  let component: AddPersonaJuridicaComponent;
  let fixture: ComponentFixture<AddPersonaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPersonaJuridicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPersonaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
