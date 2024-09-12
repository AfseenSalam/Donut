import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallCompleteComponent } from './hall-complete.component';

describe('HallCompleteComponent', () => {
  let component: HallCompleteComponent;
  let fixture: ComponentFixture<HallCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HallCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HallCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
