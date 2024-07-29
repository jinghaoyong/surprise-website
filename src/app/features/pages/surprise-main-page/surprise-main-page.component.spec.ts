import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseMainPageComponent } from './surprise-main-page.component';

describe('SurpriseMainPageComponent', () => {
  let component: SurpriseMainPageComponent;
  let fixture: ComponentFixture<SurpriseMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurpriseMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurpriseMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
