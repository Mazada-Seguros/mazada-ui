import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaNaturalComponent } from './persona-natural.component';

describe('PersonaNaturalComponent', () => {
  let component: PersonaNaturalComponent;
  let fixture: ComponentFixture<PersonaNaturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaNaturalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
