import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SHelpComponent } from './s-help.component';

describe('SHelpComponent', () => {
  let component: SHelpComponent;
  let fixture: ComponentFixture<SHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SHelpComponent]
    });
    fixture = TestBed.createComponent(SHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
