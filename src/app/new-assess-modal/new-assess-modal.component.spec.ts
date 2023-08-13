import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAssessModalComponent } from './new-assess-modal.component';

describe('NewAssessModalComponent', () => {
  let component: NewAssessModalComponent;
  let fixture: ComponentFixture<NewAssessModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAssessModalComponent]
    });
    fixture = TestBed.createComponent(NewAssessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
