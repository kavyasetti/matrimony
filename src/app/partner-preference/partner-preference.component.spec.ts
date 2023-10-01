import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPreferenceComponent } from './partner-preference.component';

describe('PartnerPreferenceComponent', () => {
  let component: PartnerPreferenceComponent;
  let fixture: ComponentFixture<PartnerPreferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerPreferenceComponent]
    });
    fixture = TestBed.createComponent(PartnerPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
