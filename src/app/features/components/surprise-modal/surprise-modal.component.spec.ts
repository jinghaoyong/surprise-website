import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseModalComponent } from './surprise-modal.component';

describe('SurpriseModalComponent', () => {
  let component: SurpriseModalComponent;
  let fixture: ComponentFixture<SurpriseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurpriseModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurpriseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
