import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPersonaNaturalComponent } from './detail-persona-natural.component';

describe('DetailPersonaNaturalComponent', () => {
  let component: DetailPersonaNaturalComponent;
  let fixture: ComponentFixture<DetailPersonaNaturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPersonaNaturalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailPersonaNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
