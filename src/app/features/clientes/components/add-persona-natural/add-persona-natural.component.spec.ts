import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonaNaturalComponent } from './add-persona-natural.component';

describe('AddPersonaNaturalComponent', () => {
  let component: AddPersonaNaturalComponent;
  let fixture: ComponentFixture<AddPersonaNaturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPersonaNaturalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPersonaNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
