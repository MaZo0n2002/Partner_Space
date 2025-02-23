import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimsFormPage } from './claims-form.page';

describe('ClaimsFormPage', () => {
  let component: ClaimsFormPage;
  let fixture: ComponentFixture<ClaimsFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
